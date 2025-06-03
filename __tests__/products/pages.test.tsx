import type React from "react"
import { render } from "@testing-library/react"
import ProductsPage from "@/app/products/page"
import NvidiaDGXPage from "@/app/products/nvidia-dgx/page"
import NvidiaHGXPage from "@/app/products/nvidia-hgx/page"
import NetworkingPage from "@/app/products/networking/page"
import StorageSystemsPage from "@/app/products/storage-systems/page"
import NvidiaAIEnterprisePage from "@/app/products/nvidia-ai-enterprise/page"
import jest from "jest" // Import jest to fix the undeclared variable error

// Mock Next.js components and hooks
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

jest.mock("next/link", () => ({
  __esModule: true,
  default: (props: any) => <a {...props} />,
}))

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

// Mock components
jest.mock("@/components/layouts/product-layout", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

jest.mock("@/components/ui/button", () => ({
  Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
}))

describe("Product Pages", () => {
  it("ProductsPage exports a default component", () => {
    expect(() => render(<ProductsPage />)).not.toThrow()
  })

  it("NvidiaDGXPage exports a default component", () => {
    expect(() => render(<NvidiaDGXPage />)).not.toThrow()
  })

  it("NvidiaHGXPage exports a default component", () => {
    expect(() => render(<NvidiaHGXPage />)).not.toThrow()
  })

  it("NetworkingPage exports a default component", () => {
    expect(() => render(<NetworkingPage />)).not.toThrow()
  })

  it("StorageSystemsPage exports a default component", () => {
    expect(() => render(<StorageSystemsPage />)).not.toThrow()
  })

  it("NvidiaAIEnterprisePage exports a default component", () => {
    expect(() => render(<NvidiaAIEnterprisePage />)).not.toThrow()
  })
})
