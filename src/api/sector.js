import request from '@/utils/request'


export function getSector() {
  return request({
    url: '/sector/list',
    method: 'get'
  })
}

export function deleteSector(data) {
  return request({
    url: '/sector/delete',
    method: 'post',
    data
  })
}

export function editSector(data) {
  return request({
    url: '/sector/edit',
    method: 'post',
    data
  })
}

export function addSector(data) {
  return request({
    url: '/sector/add',
    method: 'post',
    data
  })
}