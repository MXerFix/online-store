import React from 'react'
import { AddDeviceI } from '../../../Admin/components/AddDevice/AddDevice'

export const BasketList = ({basketList, sum}: AddDeviceI) => {
  return (
    <div>
      {basketList}
      <div>
        Сумма: {sum}
      </div>
    </div>
  )
}
