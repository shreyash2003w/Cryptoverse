import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Loader} from '../components'

const Cryptocurrencies = ({simplified}) => {
 const count = simplified ? 10 : 100;
  const {data:cryptosList,isFetching} = useGetCryptosQuery(count);
  const [cryptos,setCryptos] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  useEffect(()=>{
    
    const filterData = cryptosList?.data?.coins.filter((coins)=>coins.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    setCryptos(filterData);
  },[cryptosList,searchTerm]);
  console.log(cryptos);

     if(isFetching) return <Loader />

  return (
    <>{!simplified && (
      <div className='search-crypto'>
      <input  placeholder='search Cryptocurrency ' onChange={(e)=>{
        setSearchTerm(e.target.value)
      }}/>
  </div>
    )}
    
          <Row gutter={[32,32]} className='crypto-card-container'>
                {cryptos?.map((crypto)=>(
                   <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.uuid} >
                      <Link  key={crypto.uuid} to={`/crypto/${crypto.uuid}`} >
                        <Card title={`${crypto.rank}. ${crypto.name}`}  extra={<img className='crypto-image' src={crypto.iconUrl} />} hoverable>
                          <p>Price: {millify(crypto.price)}</p>
                          <p>Market Cap: {millify(crypto.marketCap)}</p>
                          <p>Daily Change: {millify(crypto.change)}</p>
                        </Card>
                      </Link>
                    </Col>
      ))}

     </Row> 
    </>
  )
}

export default Cryptocurrencies