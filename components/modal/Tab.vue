<template>
  <div> 
    <GridCol4>
      <template v-slot:1>
        <ModalAddUser />
        <ModalSubmitQuestion />
        <ModalUploadImage />
        <ModalReferral />
      </template>
      <template v-slot:2>
        <ModalBillingDetails />
        <ModalReview />
        <ModalReview2 />
        <ModalSecurityCode />
      </template>
      <template v-slot:3>
        <ModalCTA />
        <ModalCTA2 />
        <ModalSignup />
        <ModalSignup2 />
      </template>
      <template v-slot:4>
        <ModalDatePicker />
        <ModalPaymentSuccess />
        <ModalPolicyConsent />
      </template>
    </GridCol4>
  </div>
</template>

<script setup lang="ts">

</script>
