import useMediaQuery from "@/hooks/useMediaQuery";
import { renderHook, act } from "@testing-library/react";

describe("useMediaQuery Hook", () => {
  beforeAll(() => {
    global.matchMedia = jest.fn((query) => ({
      matches: query === "(min-width: 1076px)",
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return true when the query matches", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 1076px)"));
    expect(result.current).toBe(true);
  });

  it("should return false when the query does not match", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 1075px)"));
    expect(result.current).toBe(false);
  });

  it("should update when the resize event occurs", () => {
    const { result, rerender } = renderHook((query) => useMediaQuery(query), {
      initialProps: "(min-width: 1076px)",
    });
    expect(result.current).toBe(true);

    // Update matchMedia implementation to simulate query change on resize
    global.matchMedia.mockImplementation((query) => ({
      matches: query === "(min-width: 1076px)",
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    rerender("(min-width: 1077px)");
    expect(result.current).toBe(false);
  });

  it("should call the listener on resize", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 1076px)"));
    expect(result.current).toBe(true);

    global.matchMedia.mockImplementation((query) => ({
      matches: query === "(min-width: 1075px)",
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe(false);
  });
});
