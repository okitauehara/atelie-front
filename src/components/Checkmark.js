import styled from 'styled-components';

export default function Checkmark() {
  return (
    <Check>
      <div className="check">
        <div className="check__border" />
        <div className="check__check">
          <div className="check__check-bottom" />
          <div className="check__check-top" />
        </div>
      </div>
    </Check>
  );
}

const Check = styled.div`
  @keyframes check__border--entrance {
    100% {
      transform: rotateZ(315deg);
    }
  }

  @keyframes check__check--entrance {
    0% {
      opacity: 0;
    }
  }

  @keyframes check__check-top--entrance {
    0% {
      height: 0px;
    }
  }

  @keyframes check__check-bottom--entrance {
    0% {
      width: 0px;
    }
  }

  .check {
    position: relative;
    height: 128px;
    width: 128px;
    border-radius: 50%;
    box-shadow: 0 10px 5px rgba(0, 0, 0, .02);
    
    &__border,
    &__check {
      position: absolute;
    }
    
    &__border {
      border: 12px solid #183E63;
      border-right-color: transparent;
      top: 0; 
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      transform: rotateZ(-45deg);
      animation: check__border--entrance 1s ease;
      
      &::before,
      &::after {
        content: '';
        width: 12px;
        height: 12px;
        background: #183E63;
        position: absolute;
      }
      
      &::before {
        top: 0px; right: 11px;
        border-radius: 0 50% 50% 50%;
      }
      
      &::after {
        bottom: 0px; right: 11px;
        border-radius: 50% 50% 50% 0%;
      }
    }
    
    &__check {
      transform: rotateZ(45deg);
      top: -15%;
      right: 20%;
      bottom: 30%;
      left: 45%;
      animation: check__check--entrance .4s ease;
      
      &-top,
      &-bottom {
        position: absolute;
        background: #183E63;
        border-radius: 6px;
      }
      
      &-top {
        width: 12px;
        right: 0;
        height: 100%;
        bottom: 0;
        animation: check__check-top--entrance .4s ease .4s backwards;
      }
      
      &-bottom {
        height: 12px;
        left: 0;
        width: 100%;
        bottom: 0;
        animation: check__check-bottom--entrance .4s ease backwards;
      }
    }
  }


  body {
    height: 100vh;
    min-width: 210px;
    min-height: 210px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
