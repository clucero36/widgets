import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { overrides } from './themes/themeIndex';

import App from './App';
import Header from './components/Header';
import Accordion from './routes/Accordion';
import Translate from './routes/Translate';
import Search from './routes/Search';
import VideoPlayer from './routes/VideoPlayer';
import DropDownRoute from './routes/DropdownRoute';


const routing = (
  <ChakraProvider resetCSS theme={overrides}>
    <ColorModeScript initialColorMode={overrides.config.initialColorMode} />
    <BrowserRouter>
      <Header />
      <Routes >
          <Route path='/' element={<App />} />
          <Route path='search' element={<Search />} />
          <Route path='translate' element={<Translate />} />
          <Route path='accordion' element={<Accordion />} />
          <Route path='videoplayer' element={<VideoPlayer />} />
          <Route path='dropdown' element={<DropDownRoute />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>

)

ReactDOM.render(routing, document.querySelector('#root'))

