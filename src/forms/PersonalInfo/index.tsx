import firebase from "firebase";
import { withApollo, WithApolloClient } from "react-apollo";
import { withFormik } from "formik";
import InnerForm from "./form";
import schema from "./schema";
import { clientValidateAddress } from "@src/graphql/common";
import { FormAdditionalProps } from "@src/types";
import { SubmitButtonComponent } from "./types";

interface Values {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  address: string;
  zipCode: string;
  password: string;
}

type OuterProps = {
  firebase: typeof firebase;
  SubmitButton: SubmitButtonComponent;
} & FormAdditionalProps<Values>;

const PersonalInfoForm = withFormik<
  WithApolloClient<Partial<Values> & OuterProps>,
  Values
>({
  mapPropsToValues: ({
    firstName,
    lastName,
    email,
    city,
    address,
    zipCode,
    password
  }) => ({
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    city: city || "",
    address: address || "",
    zipCode: zipCode || "",
    password: password || ""
  }),
  enableReinitialize: true,
  validationSchema: schema,
  handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
    setSubmitting(true);

    const result = await clientValidateAddress(props.client, {
      variables: {
        address: {
          zipCode: values.zipCode,
          city: values.city,
          address: values.address
        }
      }
    });
    if (!result.data || !result.data.validate.address) {
      return setErrors({ address: "Invalid" });
    }
    try {
      const currentUser = props.firebase.auth().currentUser;
      if (!currentUser) {
        await props.firebase
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password);
      } else {
        await currentUser.updateEmail(values.email);
        await currentUser.updatePassword(values.password);
      }

      props.onSubmit(values, () => setSubmitting(false));
    } catch (e) {
      setSubmitting(false);
      if (e.code === "auth/email-already-in-use") {
        return setErrors({ email: "Email already taken" });
      }
      console.error(e);
    }
  }
})(InnerForm as any);

export * from "./types";

export default withApollo(PersonalInfoForm);
