export default {
  site: 'www.incubrain.org',
  debug: true,
  scanner: {
    throttle: false,
    device: 'desktop',
    // exclude: ['/private-zone/*'],
    samples: 1,
    dynamicSampling: 5
  },
  ci: {
    reporter: 'jsonExpanded',
    budget: {
      performance: 80,
      accessibility: 70,
      bestPractices: 80,
      seo: 80
    }
  }
}
