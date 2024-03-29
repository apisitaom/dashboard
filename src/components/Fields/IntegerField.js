import GenericField from "./GenericField";
import * as yup from "yup";

export default class IntegerField extends GenericField {
  constructor(
    name,
    label,
    { required = false, min = undefined, max = undefined } = {}
  ) {
    super(name, label);

    this.required = required;
    this.min = min;
    this.max = max;
  }

  forView(value) {
    return value;
  }

  forFormInitialValue(value) {
    return value;
  }

  forFilter() {
    return yup.number().integer().nullable(true).label(this.label);
  }

  forForm() {
    let yupChain = yup.number().integer().nullable(true).label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup.number().integer().nullable(true).label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    if (this.min || this.min === 0) {
      yupChain = yupChain.min(this.min);
    }

    if (this.max) {
      yupChain = yupChain.max(this.max);
    }

    return yupChain;
  }
}
