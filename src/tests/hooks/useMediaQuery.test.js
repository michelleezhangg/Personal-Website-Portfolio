import { renderHook, act } from "@testing-library/react";
import useMediaQuery from "@/hooks/useMediaQuery";

describe("useMediaQuery Hook", () => {
  // Mock window.matchMedia
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(min-width: 768px)",
      media: query,
      addListener: jest.fn(), // Deprecated, required for backward compatibility
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return true if the query matches", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(true);
  });

  it("should return false if the query does not match", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 769px)"));
    expect(result.current).toBe(false);
  });

  it("should update matches on resize event when query matches", () => {
    const { result, rerender } = renderHook(
      ({ query }) => useMediaQuery(query),
      {
        initialProps: { query: "(min-width: 768px)" },
      },
    );

    // Initially matches as defined in our mock
    expect(result.current).toBe(true);

    // Change query to non-matching one and trigger a resize
    window.matchMedia.mockImplementation((query) => ({
      matches: query === "(min-width: 1024px)",
      media: query,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    // Update the query prop to rerun the hook with the new query
    rerender({ query: "(min-width: 768px)" });

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe(false);
  });
});
