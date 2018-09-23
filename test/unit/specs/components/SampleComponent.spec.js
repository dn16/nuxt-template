import { shallowMount } from "@vue/test-utils"
import SampleComponent from "@/components/SampleComponent.vue"

describe("SampleComponent.vue", () => {
  it("test props", () => {
    const sampleProps = "sampleProps"
    const wrapper = shallowMount(SampleComponent, {
      propsData: {
        sampleProps: sampleProps
      }
    })
    expect(wrapper.props().sampleProps).toBe("sampleProps")
  })
})
