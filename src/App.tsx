import React, { FC } from 'react';
import { Button } from 'antd';
import './App.less';
import Category from './page/category';

const App: FC = () => (
  <div className="App">
    {/* <Button type="primary">Button</Button> */}
    <Category></Category>
  </div>
);

export default App;