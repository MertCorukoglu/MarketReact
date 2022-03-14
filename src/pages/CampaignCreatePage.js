import { Button, Form, Input, message, Select, Table } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { BaseHttpClientService } from '../services/base-service';




const { Option } = Select;
function CampaignCreatePage() {
    const inputElement = useRef();
    const products = useSelector((store) => store.ProductState.products);
    const [productList, setProductList] = useState([]);
    const [totalPrice, setTotalPrice] = useState([])
    const [indirim, setIndırım] = useState([])
    const [discountRate, setDiscountRate] = useState(null)

    console.log("ANASAYFA",products);
    const SelectedProduct =(item) =>{
        setProductList([...productList,products.find(x=>x.id === item)]);
               
    }
    console.log("SELECT",productList)
    const DeletedProduct =(item)=>{
        setProductList(productList.filter(function(asd){ 
            return asd.id !== item; 
        }))
        console.log("DESELECT",productList)
    }
    
    useEffect(() => {
        let total = 0;
        productList.map((item)=>{
            total += item.unitPrice;
        })
      setTotalPrice(total)
        
    }, [productList])
    const onFinish = async (values) => {
        values.discountRate = discountRate;
        delete values.Products;
        values.Products = productList.map((item)=>{
            return item
        })
        
        
        console.log('Success:', values);
        let response = await BaseHttpClientService.post('https://localhost:5001/api/Product/createcampaign',values)
      };
    const indirimHesapla = () =>{
        
        setDiscountRate((totalPrice-indirim)/totalPrice)
        
        console.log(discountRate)        
    }
    const columns = [
        {
          title: 'Name',
          dataIndex: 'productName',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'unitPrice',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'quantityPerUnit',
          key: 'address',
        },
      ];
    
  return (
    <div>
        <Form
                onFinish={onFinish}
                name="basic"
                
            >

                
                <Form.Item
                    label="Campaign Name"
                    name="Name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Products"
                    name="Products"
                >
                    <Select onDeselect={(value)=>{DeletedProduct(value)}} onSelect={(value)=>{SelectedProduct(value)}} mode="multiple" style={{ width: 200 }} >

                        {
                            products && products.map((item) => {

                                return (<Option value={item.id}>{item.productName}</Option>)

                            })
                        }


                    </Select>

                </Form.Item>

                <Table dataSource={productList} columns={columns} />;



                <h2>TOPLAM FİYAT: {totalPrice}</h2>

                
                <Form.Item
                    
                    label="Kampanya Fiyatı"
                    name="CampaignPrice"
                    value={indirim}
                    onChange={(e) => setIndırım(e.target.value)}
                    rules={[{ validator(){
                        if (totalPrice-indirim > 0) {
                            return Promise.resolve();
                        }
                        return Promise.reject('Kampanya Fiyatı güncel fiyattan büyük olamaz!');
                    } }]}
                >
                    <Input />
                </Form.Item>
                <Button onClick={indirimHesapla}>İndirimi Hesapla</Button>

                <p>İndirim Oranı: {discountRate}</p>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        
    </div>
  )
}

export default CampaignCreatePage