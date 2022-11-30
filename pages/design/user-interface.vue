<template>
    <div> 
      <GridCol1>
      <template v-slot:default>
        <UserInterfaceHero />
      </template>
    </GridCol1>
    <GridCol3>
      <template v-slot:1>
        <UserInterfaceCardAlt />
      </template>
      <template v-slot:2>
        <UserInterfaceVisits />
      </template>
      <template v-slot:3>
        <UserInterfaceCardFollow />
      </template>
    </GridCol3> 
    <GridCol1>
      <template v-slot:default>
        <UserInterfaceFullSection />
      </template>
    </GridCol1>
    <GridCol2EightFour>
      <template v-slot:1>
        <UserInterfaceCard />
      </template>
      <template v-slot:2>
        <UserInterfaceSummary />
      </template>
    </GridCol2EightFour>
    <GridCol1>
      <template v-slot:default>
        <UserInterfaceSummaryMed />
      </template>
    </GridCol1>
    <GridCol1>
      <template v-slot:default>
        <UserInterfaceTransactions />
      </template>
    </GridCol1>
    <GridCol4>
      <template v-slot:1>
        <UserInterfaceAddUser />
        <UserInterfaceSubmitQuestion />
        <UserInterfaceUploadImage />
        <UserInterfaceReferral />
      </template>
      <template v-slot:2>
        <UserInterfaceBillingDetails />
        <UserInterfaceReview />
        <UserInterfaceReview2 />
        <UserInterfaceSecurityCode />
      </template>
      <template v-slot:3>
        <UserInterfaceCTA />
        <UserInterfaceCTA2 />
        <UserInterfaceSignup />
        <UserInterfaceSignup2 />
      </template>
      <template v-slot:4>
        <UserInterfaceDatePicker />
        <UserInterfacePaymentSuccess />
        <UserInterfacePolicyConsent />
      </template>
    </GridCol4>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed',
})

</script>
