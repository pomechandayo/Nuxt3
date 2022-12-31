<template>
  <v-conteiner style="margin: 1000px">
    <!-- <form @submit.prevent="submit"> -->
    <Form @submit="submit">
      <Field name="name" type="name" rules="required" />
      <ErrorMessage name="name" />
      <!-- <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:10"
      >
      <v-text-field
          v-model="name"
          :counter="10"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider> -->
      <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </Form>
  </v-conteiner>
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