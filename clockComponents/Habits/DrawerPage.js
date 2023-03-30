import { createDrawerNavigator } from '@react-navigation/drawer';
import ActionList from './ActionList';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={ActionList} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;