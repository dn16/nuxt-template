import { mount, RouterLinkStub } from "@vue/test-utils"
import Header from "@/components/Header.vue"

describe("Header.vue", () => {
  test("link test", () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    const links = wrapper.findAll(RouterLinkStub)

    expect(links.at(0).text() === "Header")
    expect(links.at(0).props().to === "/")
  })
})
