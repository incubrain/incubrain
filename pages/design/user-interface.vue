<template>
  <div>
    <GridCol1>
      <template #default>
        <UserInterfaceHero />
      </template>
    </GridCol1>
    <GridCol3>
      <template #1>
        <UserInterfaceCardAlt />
      </template>
      <template #2>
        <UserInterfaceVisits />
      </template>
      <template #3>
        <UserInterfaceCardFollow />
      </template>
    </GridCol3>
    <GridCol1>
      <template #default>
        <UserInterfaceFullSection />
      </template>
    </GridCol1>
    <GridCol2EightFour>
      <template #1>
        <UserInterfaceCard />
      </template>
      <template #2>
        <UserInterfaceSummary />
      </template>
    </GridCol2EightFour>
    <GridCol1>
      <template #default>
        <UserInterfaceSummaryMed />
      </template>
    </GridCol1>
    <GridCol1>
      <template #default>
        <UserInterfaceTransactions />
      </template>
    </GridCol1>
    <GridCol4>
      <template #1>
        <UserInterfaceAddUser />
        <UserInterfaceSubmitQuestion />
        <UserInterfaceUploadImage />
        <UserInterfaceReferral />
      </template>
      <template #2>
        <UserInterfaceBillingDetails />
        <UserInterfaceReview />
        <UserInterfaceReview2 />
        <UserInterfaceSecurityCode />
      </template>
      <template #3>
        <UserInterfaceCTA />
        <UserInterfaceCTA2 />
        <UserInterfaceSignup />
        <UserInterfaceSignup2 />
      </template>
      <template #4>
        <UserInterfaceDatePicker />
        <UserInterfacePaymentSuccess />
        <UserInterfacePolicyConsent />
      </template>
    </GridCol4>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'tabbed'
})

</script>
