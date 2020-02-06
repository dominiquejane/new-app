<template>
  <div>
    <My-Button></My-Button>

    <div class="m-4 max-w-2xl">
      <S-Input placeholder="hey" />
      <form action="submit" class="max-w-2xl border rounded-lg bg-gray-100">
          <div class="m-2 p-2">
            <label for="form-name">Name:</label>
            <div id="form-name">
              <S-Input placeholder="First Name" class="my-2"/>
              <S-Input placeholder="Last Name" />
            </div>
          </div>
          <div class="m-2 p-2">
            <label for="form-email">Email:</label>
            <S-Input id="form-email" type="email" placeholder="email@example.com" />
          </div>
          <div class="flex justify-center m-2 p-2">
            <S-Button title="Submit Form" class="bg-teal-400 text-teal-900 hover:bg-teal-500" />
          </div>
        </form>
    </div>

    <div class="m-4 max-w-2xl">
      <S-Button title="hey new button" />
      <S-Button title="has tailwind classes" class="text-green-500"/>
      <S-Button title="Small Button" class="block" :class="['s-button--small']"/>
    </div>

    <div class="m-4 max-w-2xl">
      <S-Email-Form />
      <S-Email-Form blurb="Sign up for our newsletter!" submitText="Submit"/>
      <S-Email-Form :buttonClasses="['bg-purple-300', 'text-purple-900', 'hover:bg-purple-400']"/>
    </div>

    <div class="m-4 max-w-2xl">
      <S-Cookies-Banner :clearOnReload="true"/>
    </div>


  </div>
</template>

<script>
import Components from '@djane/summa-components'

export default {
  name: 'App',

  components: {
    ...Components
  },

  data: () => ({
    //
  }),
};
</script>
