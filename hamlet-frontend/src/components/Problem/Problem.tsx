import { useEffect, useState } from 'react';
import { StyledLogo, StyledApp, StyledRoom } from './styles';
import axios from 'axios';
import Game from '../../pages/Game/Game';

function Problem() {
  const [index, setIndex] = useState<number>(0);
  var array: any = [];
  const hamletId = 3;

  useEffect(()=>{
    onData();
  }, []);

  const onData = async() => {
    var config = {
      method: 'get',
      url: `/questions/${hamletId}`,
    };
    try{
      const data = await axios(config);
      array = data.data;
      console.log(array,'array');
    }catch(err){
      console.error(err);
    }
  }

  return(
    <div></div>
    //<Game array={array} />
  );
}

export default Problem;