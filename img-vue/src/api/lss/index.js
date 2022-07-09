// 导入http中创建的axios实例
import http from '../api';

export const getTableData = (params) => http("get", `/api/getTableData`,params)//分页查询获取图片信息
export const getTotalCount = (params) => http("get", `/api/getTotalCount`,params)//分页查询获取总数





