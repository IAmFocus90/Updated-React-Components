import { MenuList } from "./menu-list";

export default function TreeViewMenu({menu = []}) {
  return (
    <div className="tree-view-container">
        <MenuList list={menu} />
    </div>
  )
}