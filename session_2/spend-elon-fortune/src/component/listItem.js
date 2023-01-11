import React from "react";
import Items from "./Items";
class ListItems extends React.Component {
    render() {
        return (
            <div className='container'>
                <Items
                    img={"https://i.imgur.com/jImRpPw.jpg"}
                    name={"AirPods Pro"}
                    price={"249"}
                />
                <Items
                    img={"https://i.imgur.com/LUyQhmF.jpg"}
                    name={"Nintendo Switch"}
                    price={"299"}
                />
                <Items
                    img={"https://i.imgur.com/CugpEfY.jpg"}
                    name={"PS5"}
                    price={"499"}
                />
                <Items
                    img={"https://i.imgur.com/HgPROm3.jpg"}
                    name={"Xbox Series X"}
                    price={"499"}
                />
                <Items
                    img={"https://i.imgur.com/SH7FrjV.jpg"}
                    name={"Iphone 14 Pro Max - 1TB"}
                    price={"1,599"}
                />
                <Items
                    img={"https://i.imgur.com/1Vf4DWy.jpg"}
                    name={"Samsung S22 Ultra - 1TB"}
                    price={"1,399"}
                />
                <Items
                    img={"https://i.imgur.com/69V42nb.jpg"}
                    name={"MacBook Pro 14' M1 Max (64GB RAM | 4TB)"}
                    price={"4,699"}
                />
                <Items
                    img={"https://i.imgur.com/TaO01Rv.jpg"}
                    name={"2022 Mac Studio M1 Ultra (128GB RAM | 8TB)"}
                    price={"6,999"}
                />
                <Items
                    img={"https://i.imgur.com/PXJj7z0.jpg"}
                    name={"Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)"}
                    price={"4,950"}
                />
            </div>
        );
    }
}
export default ListItems;