import { render, screen } from "@testing-library/react";
import ContainerComponent from "./ContainerComponent";

vi.mock("./ContainerComponent.module.scss", () => ({
  container: "mocked-container-class",
}));

describe("ContainerComponent", () => {
  test("renders the component and its children", () => {
    const childText = "Hello, I am a child";

    render(
      <ContainerComponent>
        <p>{childText}</p>
      </ContainerComponent>
    );

    const childElement = screen.getByText(childText);
    expect(childElement).toBeInTheDocument();
  });

  test("applies the correct container class", () => {
    const childText = "Hello, I am a child";

    render(
      <ContainerComponent>
        <p>{childText}</p>
      </ContainerComponent>
    );

    const containerElement = screen.getByText(childText).parentElement;
    expect(containerElement).toHaveClass("mocked-container-class");
  });

  test("renders empty container if no children are passed", () => {
    const { container } = render(<ContainerComponent />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
