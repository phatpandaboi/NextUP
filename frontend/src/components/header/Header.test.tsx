import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(<Header title={""} links={[]} />);
    expect(screen.getByTestId("header-root")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    const title = "My App";
    render(<Header title={title} links={[]} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    const links = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ];
    render(<Header title={""} links={links} />);
    links.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it("navigates when a link is clicked", async () => {
    const user = userEvent.setup();
    const links = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ];
    render(<Header title={""} links={links} />);
    const aboutLink = screen.getByText("About");
    await user.click(aboutLink);
    expect(window.location.href).toContain("/about");
  });

});