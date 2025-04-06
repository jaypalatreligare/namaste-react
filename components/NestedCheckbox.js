import { useState } from "react";

const checkboxData = [
  {
    id: 0,
    name: "FruitsBox",
    children: [
      {
        id: 1,
        name: "Fruits",
        children: [
          {
            id: 2,
            name: "Citrus",
            children: [
              {
                id: 3,
                name: "Orange",
                children: [
                  {
                    id: 29,
                    name: "Navel Orange",
                    children: [
                      { id: 31, name: "California Navel" },
                      { id: 32, name: "Washington Navel" },
                    ],
                  },
                  { id: 30, name: "Blood Orange" },
                ],
              },
              { id: 4, name: "Lemon" },
            ],
          },
          {
            id: 5,
            name: "Berries",
            children: [
              { id: 6, name: "Strawberry" },
              { id: 7, name: "Blueberry" },
              { id: 8, name: "Raspberry" },
            ],
          },
          {
            id: 9,
            name: "Tropical",
            children: [
              { id: 10, name: "Mango" },
              { id: 11, name: "Pineapple" },
              { id: 12, name: "Papaya" },
            ],
          },
        ],
      },
      {
        id: 13,
        name: "Vegetables",
        children: [
          {
            id: 14,
            name: "Leafy Greens",
            children: [
              { id: 15, name: "Spinach" },
              { id: 16, name: "Lettuce" },
              { id: 17, name: "Kale" },
            ],
          },
          {
            id: 18,
            name: "Root Vegetables",
            children: [
              { id: 19, name: "Carrot" },
              { id: 20, name: "Beetroot" },
              { id: 21, name: "Radish" },
            ],
          },
        ],
      },
      {
        id: 22,
        name: "Grains",
        children: [
          {
            id: 23,
            name: "Whole Grains",
            children: [
              { id: 24, name: "Brown Rice" },
              { id: 25, name: "Quinoa" },
            ],
          },
          {
            id: 26,
            name: "Refined Grains",
            children: [
              { id: 27, name: "White Rice" },
              { id: 28, name: "White Bread" },
            ],
          },
        ],
      },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleOnchange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      const verifyChecked = (node) => {
        if (!node.childern) return newState[node.id] || false;
        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)  
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      checkboxData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div className="parent" key={node.id}>
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleOnchange(e.target.checked, node)}
          />
          <span style={{ marginLeft: "8px" }}>{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const NestedCheckbox = () => {
  const [checked, setChecked] = useState({ 1: true, 2: true });
  return (
    <div>
      <Checkboxes
        data={checkboxData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default NestedCheckbox;
