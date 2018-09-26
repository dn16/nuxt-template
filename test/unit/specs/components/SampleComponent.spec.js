import { shallowMount } from "@vue/test-utils"
import SampleComponent from "@/components/SampleComponent.vue"

describe("SampleComponent.vue", () => {
  const sampleProps = "sampleProps"
  const wrapper = shallowMount(SampleComponent, {
    propsData: {
      sampleProps: sampleProps
    }
  })
  it("test props", () => {
    expect(wrapper.props().sampleProps).toBe("sampleProps")
  })
})
