function initData() {
  jimData.variables["text1"] = "";
  jimData.variables["text2"] = "";
  jimData.variables["products"] = "";
  jimData.datamasters["users"] = [
    {
      "id": 1,
      "datamaster": "users",
      "userdata": {
        "User Name": "Samer",
        "Password": "sam123"
      }
    },
    {
      "id": 2,
      "datamaster": "users",
      "userdata": {
        "User Name": "Saif",
        "Password": "saif123"
      }
    },
    {
      "id": 3,
      "datamaster": "users",
      "userdata": {
        "User Name": "Saffin",
        "Password": "saf123"
      }
    }
  ];

  jimData.isInitialized = true;
}