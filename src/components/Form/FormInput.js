import React from "react";
import { Input, Label } from "@theme-ui/components";

import FormGroup from "./FormGroup";

function FormInput({ label, name, value, onChange, type }) {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input name={name} value={value} onChange={onChange} type={type} />
    </FormGroup>
  );
}

export default FormInput;
