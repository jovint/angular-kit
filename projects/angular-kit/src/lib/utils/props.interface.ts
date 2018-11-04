export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface Props {
  label?: string;
  name?: string;
  options?: string[];
  type: string;
  inputType?: string;
  classes?: string;
  value?: any;
  valid?: boolean;
  validations?: Validator[];
}
