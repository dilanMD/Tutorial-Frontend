import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Dashboard extends React.Component {
  state = {
    dataBar: {
      labels: [
          "Tyrone", 
          "Hari", 
          "Deluxan", 
          "Mathangan", 
          "Theepan", 
          "Thenujan", 
          "Kishan", 
          "Thuvarakan", 
          "Romi",
          "Alan sir",
          "Malin",
          "Chathuranga",
          "Unknown"
        ],
      datasets: [
        {
          label: "% of Involvement",
          data: [100, 90, 50, 98, 60, 70, 100, 90, 50, 98, 60, 70, 85],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)",
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)",
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }


  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Involvement chart</h3>
        <Bar height="300" data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default Dashboard