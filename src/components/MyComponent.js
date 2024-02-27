import React from "react";
class MyComponent extends React.Component {
  statate = {
    name: "Dat Dep Trai",
    age: 21,
  };

  render() {
    var name = "Dat";
    {
      console.log("my name is", name);
    }
    return (
      <div>
        <h1>Learn Docker K8s with {name}</h1>
        <h2>Tuoi: {this.statate.age}</h2>
      </div>
    );
  }
}
export default MyComponent;
