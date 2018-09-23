import { mount } from "@vue/test-utils"
import Footer from "@/components/Footer.vue"

describe("Footer.vue", () => {
  const wrapper = mount(Footer)
  test("コピーライト文言", () => {
    expect(wrapper.find(".copy").text()).toEqual("Copyright © my_nust_tmplate")
  })
})
