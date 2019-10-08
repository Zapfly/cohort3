import assertEquals from './daily'

test("Check script", () => {
    expect(assertEquals(1, 1)).toBe(true);
    expect(assertEquals("a", "b")).toBe("the two values are not the same");
    expect(assertEquals(1, 2)).toBe("the two values are not the same");
    expect(assertEquals(2, "2")).toBe("the two values are not the same");
}); 

