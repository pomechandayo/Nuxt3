<template>
  <div>
  </div>
</template>

<script>
import { required, email, min } from '@vee-validate/rules'
import {
  // extend,
  // ValidationObserver,
  // ValidationProvider,
  defineRule,
  Form,
  Field,
  ErrorMessage
} from "vee-validate";
defineRule('required', required);

// extend("required", {
//   ...required,
//   message: "{_field_} can not be empty",
// });

export default {
  components: {
    // ValidationProvider,
    // ValidationObserver,
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submit() {
      console.log(111)
    },
    clear() {
      this.name = "";
      this.$refs.observer.reset();
    },
    validateName(value) {
      console.log(1)
      console.log(value)
      if (!value) {
        return "This field is required";
      }
      console.log(2)
      return true
    },
  },
};
</script>