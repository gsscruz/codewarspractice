// ### Simple Beads count

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
// @ @@ @ @@ @ @@ @ @@ @ @@ @
// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.If there are less than 2 blue beads return 0.

export function countRedBeads(n: number): number {
  //anwser for current problem; where you receive *N BLUE* beads and count the red ones.

  return n < 2 ? 0 : n * 2 - 2;

  //anwser for problem where you are given *N* beads and count the red ones.

  //   const beadsList: string[] = [];

  //   for (let i: number = 0; i < n; i++) {
  //     beadsList.push("🧿");
  //   }

  //   const sortedBeadsList: string[][] = [];

  //   function countThreeBeads() {
  //     sortedBeadsList.push(["B", "R", "R"]);
  //   }
  //   function countTwoBeads() {
  //     sortedBeadsList.push(["B", "R"]);
  //   }

  //   let unsortedBeadsList = [...beadsList];

  //   for (let i = 0; i < beadsList.length; i++) {
  //     if (unsortedBeadsList.length >= 3) {
  //       if (i % 3 === 0) {
  //         countThreeBeads();
  //         unsortedBeadsList = unsortedBeadsList.slice(3);
  //       }
  //     }

  //     if (unsortedBeadsList.length >= 2 && unsortedBeadsList.length < 3) {
  //       countTwoBeads();
  //       unsortedBeadsList = unsortedBeadsList.slice(2);
  //     }
  //   }

  //   return sortedBeadsList.flat().filter((bead) => bead === "R").length;
}
countRedBeads(3);
