<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  body{
    font-family: Inter;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow-x: hidden !important;
  }
  .welcome{
        .welcome_container{
        color: white;
        padding: 32px 0px 32px 32px;
        width: 744px;
        height: 230px;
        background: #1565D8;
        border-radius: 8px;
        .welcome_speech{
            h4{
            font-style: normal;
            font-weight: 500;
            font-size: 26px;
            line-height: 31px;
            margin: 16px 0px;
            span{
                font-weight: 400;
            }
            }
            p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 145%;
            }
            button{
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #FFFFFF;
            padding: 16px 24px;
            height: 49px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            border: none;
            &:focus{
                outline: none;
                box-shadow: none !important;
            }
            .small_icons{
                width: 16px;
                height: 16px;
                left: 24px;
                top: 16.5px;
                margin: 0px 8px;
            }
            }
        }
        .character{
            position: relative;
            right: 3.03%;
            top: -19%;
        }
        }
    }
  
  .card{
      width: 744px;
      height: 400px;
      margin-top: 25px;
      background: #FFFFFF;
      border-radius: 8px;
      border: none;
      padding: 15px;
      h4{
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #1D2B4F;
      }
        hr{
          width: 48px;
          border: 3px solid #1565D8;
          margin-left: initial;
          margin-top: 4px;
          margin-bottom: 25px;
        }
      
    }

  .calendar{
    padding: 24px;
    width: 360px;
    height: 385.49px;
    border-radius: 8px;
    margin-top: 0;
  }
</style>
