type Herose = "Hulk" | "Capt" | "Thor";
type HeroAges = { [K in Herose]: number };
const ages: HeroAges = {
  Hulk: 100,
  Capt: 200,
  Thor: 300,
};
