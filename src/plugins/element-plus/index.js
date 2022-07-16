import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElCheckbox,
  ElCheckboxGroup
} from "element-plus";
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElCheckbox,
  ElCheckboxGroup
];
const Element = {
  install(app) {
    components.forEach((component) => app.component(component.name, component));
  }
};
export default Element;
