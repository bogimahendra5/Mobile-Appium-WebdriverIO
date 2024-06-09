class tabBarMenuPage {
  get Menu() {
    return $("~tab bar option menu");
  }
  get Catalog() {
    return $("~tab bar option catalog");
  }
  get Cart() {
    return $("~tab bar option cart");
  }
}
export default new tabBarMenuPage();
