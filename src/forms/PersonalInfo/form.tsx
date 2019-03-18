import React from "react";
import { Dimensions } from "react-native";
import get from "lodash/get";
import { PersonalInfo } from "@src/types";
import { Input, Spacer } from "@src/components";
import * as S from "./styles";
import { SubmitButtonComponent } from "./types";
import { InnerFormProps } from "@src/types/Forms";

const { width } = Dimensions.get("window");

type Props = InnerFormProps<PersonalInfo> & {
  SubmitButton: SubmitButtonComponent;
};

const InnerForm = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched,
  setFieldTouched,
  isSubmitting,
  SubmitButton
}: Props) => {
  return (
    <S.FlexEndView>
      <S.Paper style={S.shadow.grey}>
        <S.Row>
          <Input
            width={width - 64}
            label="First Name"
            onChangeText={handleChange("firstName")}
            value={values.firstName}
            error={errors.firstName}
            onBlur={() => setFieldTouched("firstName")}
            touched={get(touched, "firstName", false)}
            autoFocus
          />
        </S.Row>
        <S.Row>
          <Input
            width={width - 64}
            label="Last Name"
            onChangeText={handleChange("lastName")}
            value={values.lastName}
            error={errors.lastName}
            onBlur={() => setFieldTouched("lastName")}
            touched={get(touched, "lastName", false)}
          />
        </S.Row>
        <S.Row>
          <Input
            width={80}
            label="ZIP code"
            keyboardType="numeric"
            onChangeText={handleChange("zipCode")}
            value={values.zipCode}
            error={errors.zipCode}
            onBlur={() => setFieldTouched("zipCode")}
            touched={get(touched, "zipCode", false)}
          />
          <S.MarginRight20 />
          <Input
            width={width - 164}
            label="City"
            onChangeText={handleChange("city")}
            value={values.city}
            error={errors.city}
            onBlur={() => setFieldTouched("city")}
            touched={get(touched, "city", false)}
          />
        </S.Row>
        <S.Row>
          <Input
            width={width - 64}
            label="Street address"
            onChangeText={handleChange("address")}
            value={values.address}
            error={errors.address}
            onBlur={() => setFieldTouched("address")}
            touched={get(touched, "address", false)}
          />
        </S.Row>
        <S.Row>
          <Input
            width={width - 64}
            label="Email"
            onChangeText={handleChange("email")}
            value={values.email}
            error={errors.email}
            keyboardType="email-address"
            onBlur={() => setFieldTouched("email")}
            touched={get(touched, "email", false)}
          />
        </S.Row>
        <S.Row>
          <Input
            width={width - 64}
            label="Password"
            onChangeText={handleChange("password")}
            value={values.password}
            error={errors.password}
            onBlur={() => setFieldTouched("password")}
            touched={get(touched, "password", false)}
            secureTextEntry
          />
        </S.Row>
      </S.Paper>
      <Spacer height={35} />
      <S.ButtonWrap>
        <SubmitButton isSubmitting={isSubmitting} onSubmit={handleSubmit} />
      </S.ButtonWrap>
    </S.FlexEndView>
  );
};

export default InnerForm;
