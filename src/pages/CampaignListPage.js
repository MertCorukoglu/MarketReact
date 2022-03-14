import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BaseHttpClientService } from "../services/base-service";

function CampaignListPage() {
  const products = useSelector((store) => store.ProductState.products);
  const [campaign, setCampaign] = useState([]);
  useEffect(async () => {
    let response = await BaseHttpClientService.get(
      "https://localhost:5001/api/Product/getallcampaign"
    );
    setCampaign(response);
    console.log("ALLCAMPAİGN", response);
  }, []);

  return (
    <div>
      <div className="site-card-border-less-wrapper">
        {campaign &&
          campaign.map((item) => {
            return (
              <>
                <Card title={item.name} bordered={false} style={{ width: 300 }}>
                  <p>{item.price}</p>
                  <p>{item.discount}</p>
                </Card>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default CampaignListPage;
