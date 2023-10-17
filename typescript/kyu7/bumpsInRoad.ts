//

export function bump(x: string): string {
  const input = [...x];
  const bumpArray = input.filter((roadState) => roadState === "n");
  return bumpArray.length <= 15 ? "Woohoo!" : "Car Dead";
}
