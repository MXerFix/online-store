import { toJS } from 'mobx'
import React, { useState } from 'react'
import { deleteDevice } from '../../../../../http/deviceAPI'
import DeviceStore from '../../../../../store/DeviceStore'
import InvertBtn from '../../../../../UI/InvertBtn/InvertBtn'
import { AddDeviceI } from '../../AddDevice/AddDevice'
import styles from './deviceslist.css'

export const DevicesList = ({ cancelFn }: AddDeviceI) => {
  

  const fetchedList = toJS(DeviceStore.devices)

  const clickDelete = async (id:object) => {
    const response = await deleteDevice({id: id}).then(data => DeviceStore.setDevices(data))
    return response
  }
  


  return (
    <div className='content'>
      <div className={styles.wrapper}>
        <div className={styles.in_wrapper}>
          {fetchedList.map((device) =>
            <div key={device.id} className={styles.admin_device_card}>
              <div className={styles.device_card_mainBox}>
                <div className={styles.left_imageBox}>
                    <img src={`http://localhost:3100/${device.img}`} alt="" />
                    <span> ID: {device.id} </span>
                  <div>
                    <div className={styles.rightInput_box}>
                      <label htmlFor="">Название</label>
                      <input type="text" defaultValue={device.name} />
                    </div>
                    <div className={styles.rightInput_box}>
                      <label htmlFor="">Описание</label>
                      <textarea defaultValue={device.description} />
                    </div>
                  </div>
                </div>
                <div className={styles.rightSide_box}>
                  <div className={styles.rightInput_box}>
                    <label htmlFor="">Цена</label>
                    <input type="text" defaultValue={device.price} />
                  </div>
                  <div className={styles.rightInput_box}>
                    <label htmlFor="">Цена без скидки</label>
                    <input type="text" defaultValue={device.oldPrice} />
                  </div>
                </div>
              </div>
              <div>
              </div>
              <InvertBtn onClick={() => {clickDelete(device.id); console.log(device.id)}} className={styles.mini_InvertBtn}> Удалить устройство </InvertBtn>
            </div>
          )}
        </div>
        <InvertBtn onClick={cancelFn}> Назад </InvertBtn>
      </div>
    </div>
  )
}
