
/**
 * @title AppComplainRecordDTO
 **/
export type ZmsxUserComponentsSchemasAppComplainRecordDTO = {
/**
 * @description 投诉人姓名
 **/
complainantName: string;
/**
 * @description 投诉人电话
 **/
complainantTel: string;
/**
 * @description 投诉内容
 **/
content: string;
/**
 * @description 来源 STAGEPAY：阶段付； SAFETYPAY:安心充;
 **/
source: string;
/**
 * @description 投诉类型 投诉类型： SHOP:门店关闭；REFUND:退款问题；MERCHANT：商户问题；OTHER:其他
 **/
type: string;
};
/**
 * @title AppComplainRecordPageDTO
 **/
export type ZmsxUserComponentsSchemasAppComplainRecordPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title AppComplainRecordVO
 **/
export type ZmsxUserComponentsSchemasAppComplainRecordVO = {
/**
 * @description 投诉记录id
 * @format int64
 **/
complainRecordId: number;
/**
 * @description 投诉内容
 **/
content: string;
/**
 * @description 投诉时间
 **/
createTime: string;
/**
 * @description 来源
 **/
source: string;
/**
 * @description 投诉类型
 **/
type: string;
};
/**
 * @title ComplainRecordDetailVO
 **/
export type ZmsxUserComponentsSchemasComplainRecordDetailVO = {
/**
 * @description 投诉记录id
 * @format int64
 **/
complainRecordId: number;
/**
 * @description 投诉人姓名
 **/
complainantName: string;
/**
 * @description 投诉人电话
 **/
complainantTel: string;
/**
 * @description content
 **/
content: string;
/**
 * @description 投诉时间
 **/
createTime: string;
/**
 * @description 处理结果集
 **/
handleRecords: ZmsxUserComponentsSchemasHandleRecordVO[];
/**
 * @description 处理状态
 **/
handleStatus: string;
/**
 * @description 商户名字
 **/
merchantName: string;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description source
 **/
source: string;
/**
 * @description type
 **/
type: string;
/**
 * @description 支付宝昵称
 **/
userNickName: string;
};
/**
 * @title ComplainRecordPageDTO
 **/
export type ZmsxUserComponentsSchemasComplainRecordPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 投诉人姓名
 **/
complainantName?: string;
/**
 * @description 投诉人电话
 **/
complainantTel?: string;
/**
 * @description 处理状态 处理状态： WAIT:待处理；HANDLED已处理; 全部不传
 **/
handleStatus?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 来源 STAGEPAY：阶段付； SAFETY:安心充;
 **/
source?: string;
};
/**
 * @title HandleRecordVO
 **/
export type ZmsxUserComponentsSchemasHandleRecordVO = {
/**
 * @description 投诉记录id
 * @format int64
 **/
complainRecordId: number;
/**
 * @description 处理时间
 **/
createTime: string;
/**
 * @description 处理结果
 **/
handleResult: string;
/**
 * @description 处理人姓名
 **/
handlerName: string;
/**
 * @description 处理用时
 **/
handlerSpendTime: string;
};
/**
 * @title HandleResultDTO
 **/
export type ZmsxUserComponentsSchemasHandleResultDTO = {
/**
 * @description 投诉记录id
 * @format int64
 **/
complainRecordId: number;
/**
 * @description 处理结果
 **/
handleResult?: string;
/**
 * @description 处理人姓名
 **/
handlerName?: string;
};
/**
 * @title UserSessionInfoVO
 **/
export type ZmsxUserComponentsSchemasUserSessionInfoVO = {
/**
 * @description 登录账号ID
 * @format int64
 **/
accountId: number;
/**
 * @description 阿里用户id
 **/
alipayUserId: string;
/**
 * @description 头像地址，未设置的用户为空
 **/
avatar: string;
/**
 * @description 注册时间
 * @format date-time
 **/
createTime: string;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 用户昵称
 **/
nickName: string;
/**
 * @description 用户性别，F: 女，M：男
 **/
sex: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 用户手机号
 **/
tel: string;
/**
 * @description 用户ID
 * @format int64
 **/
userId: number;
/**
 * @description 用户名称
 **/
userName: string;
};
/**
 * @title PageVO«AppComplainRecordVO»
 **/
export type ZmsxUserComponentsSchemasPageVO_AppComplainRecordVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxUserComponentsSchemasAppComplainRecordVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ComplainRecordDetailVO»
 **/
export type ZmsxUserComponentsSchemasPageVO_ComplainRecordDetailVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxUserComponentsSchemasComplainRecordDetailVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«AppComplainRecordVO»
 **/
export type ZmsxUserComponentsSchemasResult_AppComplainRecordVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxUserComponentsSchemasAppComplainRecordVO;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppComplainRecordVO»»
 **/
export type ZmsxUserComponentsSchemasResult_PageVO_AppComplainRecordVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxUserComponentsSchemasPageVO_AppComplainRecordVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ComplainRecordDetailVO»»
 **/
export type ZmsxUserComponentsSchemasResult_PageVO_ComplainRecordDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxUserComponentsSchemasPageVO_ComplainRecordDetailVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«UserSessionInfoVO»
 **/
export type ZmsxUserComponentsSchemasResult_UserSessionInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxUserComponentsSchemasUserSessionInfoVO;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxUserComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
export interface PathsZmsxUser{'/user/c/complain/complain': {put: {
param:{
/**
 * @description complainRecordDTO
 **/
body: ZmsxUserComponentsSchemasAppComplainRecordDTO;
}
/**
 * @description OK
 **/
response: ZmsxUserComponentsSchemasResult_Void_;
};
};
'/user/c/complain/detail': {get: {
param:{query: {
/**
 * @description recordId
 * @format int64
 **/
recordId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxUserComponentsSchemasResult_AppComplainRecordVO_;
};
};
'/user/c/complain/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxUserComponentsSchemasAppComplainRecordPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxUserComponentsSchemasResult_PageVO_AppComplainRecordVO_;
};
};
'/user/c/info': {get: {
/**
 * @description OK
 **/
response: ZmsxUserComponentsSchemasResult_UserSessionInfoVO_;
};
};
'/user/console/complain/handle': {post: {
param:{
/**
 * @description handleResultDTO
 **/
body: ZmsxUserComponentsSchemasHandleResultDTO;
}
/**
 * @description OK
 **/
response: ZmsxUserComponentsSchemasResult_Void_;
};
};
'/user/console/complain/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxUserComponentsSchemasComplainRecordPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxUserComponentsSchemasResult_PageVO_ComplainRecordDetailVO_;
};
};
}

/**
 * @title AccountLoginDTO
 **/
export type ZmsxAuthComponentsSchemasAccountLoginDTO = {client?: string;
password: string;
userName: string;
};
/**
 * @title LoginResultVO
 **/
export type ZmsxAuthComponentsSchemasLoginResultVO = {
/**
 * @description 过期时间，时间戳(秒)
 * @format int64
 **/
expireTime: number;
/**
 * @description 认证token
 **/
token: string;
};
/**
 * @title Result«LoginResultVO»
 **/
export type ZmsxAuthComponentsSchemasResult_LoginResultVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxAuthComponentsSchemasLoginResultVO;
msg: string;
success: boolean;
};
/**
 * @title 小程序登录
 * @description 登录相关参数
 **/
export type ZmsxAuthComponentsSchemas_ = {
/**
 * @description 小程序APPID
 **/
appId: string;
/**
 * @description 认证code
 **/
authCode: string;
/**
 * @description 手机号加密串
 **/
mobileEncryptStr: string;
};
export interface PathsZmsxAuth{'/auth/empLogin': {post: {
param:{
/**
 * @description accountLoginDTO
 **/
body: ZmsxAuthComponentsSchemasAccountLoginDTO;
}
/**
 * @description OK
 **/
response: ZmsxAuthComponentsSchemasResult_LoginResultVO_;
};
};
'/auth/merchantLogin': {post: {
param:{
/**
 * @description accountLoginDTO
 **/
body: ZmsxAuthComponentsSchemasAccountLoginDTO;
}
/**
 * @description OK
 **/
response: ZmsxAuthComponentsSchemasResult_LoginResultVO_;
};
};
'/auth/partnerLogin': {post: {
param:{
/**
 * @description accountLoginDTO
 **/
body: ZmsxAuthComponentsSchemasAccountLoginDTO;
}
/**
 * @description OK
 **/
response: ZmsxAuthComponentsSchemasResult_LoginResultVO_;
};
};
'/auth/platformLogin': {post: {
param:{
/**
 * @description accountLoginDTO
 **/
body: ZmsxAuthComponentsSchemasAccountLoginDTO;
}
/**
 * @description OK
 **/
response: ZmsxAuthComponentsSchemasResult_LoginResultVO_;
};
};
'/auth/supplierLogin': {post: {
param:{
/**
 * @description accountLoginDTO
 **/
body: ZmsxAuthComponentsSchemasAccountLoginDTO;
}
/**
 * @description OK
 **/
response: ZmsxAuthComponentsSchemasResult_LoginResultVO_;
};
};
'/auth/userLogin': {post: {
param:{
/**
 * @description appletLoginDTO
 **/
body: ZmsxAuthComponentsSchemas_;
}
/**
 * @description OK
 **/
response: ZmsxAuthComponentsSchemasResult_LoginResultVO_;
};
};
}

/**
 * @title AddPartnerDTO
 **/
export type ZmsxPartnerComponentsSchemasAddPartnerDTO = {
/**
 * @description 支付宝账号
 **/
alipayAccount?: string;
/**
 * @description 支付宝账号名
 **/
alipayAccountName?: string;
/**
 * @description 支付宝账号类型 PUB 对公支付宝账号，PRI 对私支付宝账号
 **/
alipayAccountType?: string;
/**
 * @description 银行卡账号
 **/
bankAccount?: string;
/**
 * @description 开户行支行
 **/
bankBranchName?: string;
/**
 * @description 银行卡开户名
 **/
bankCardName?: string;
/**
 * @description 开户行名称
 **/
bankName?: string;
/**
 * @description 经营类目
 **/
businessCategory: string;
/**
 * @description 经营类目经营类目描述
 **/
categoryDesc?: string;
/**
 * @description 联系人
 **/
contactPerson?: string;
/**
 * @description 联系人手机号
 **/
contactPhone?: string;
/**
 * @description 服务商邮箱
 **/
email?: string;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人相面
 **/
idcardFacePic: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人证件号
 **/
legalNumber: string;
/**
 * @description 营业执照编码
 **/
licenseNo: string;
/**
 * @description 登录账号
 **/
loginName?: string;
/**
 * @description 营业执照
 **/
partnerLicensePic: string;
/**
 * @description 服务商logo
 **/
partnerLogo: string;
/**
 * @description 商户全称
 **/
partnerName: string;
/**
 * @description 服务商类型 0 企业；1 个体工商户
 * @format int32
 **/
partnerType: number;
/**
 * @description 登录初始密码
 **/
password: string;
/**
 * @description 是否是对公账户 true 是对公账户；false不是对公账户
 **/
pubAccount?: boolean;
/**
 * @description 服务商简称
 **/
shortName: string;
};
/**
 * @title BrokerageStatisticsVO
 **/
export type ZmsxPartnerComponentsSchemasBrokerageStatisticsVO = {
/**
 * @description 业绩
 **/
performance: string;
/**
 * @description 返佣
 **/
rebateAmount: string;
recordPage: ZmsxPartnerComponentsSchemasPageVO_PartnerFeeRecordVO_;
};
/**
 * @title ChangeEmployeeEnableDTO
 **/
export type ZmsxPartnerComponentsSchemasChangeEmployeeEnableDTO = {
/**
 * @description 员工ID
 * @format int64
 **/
empId: number;
/**
 * @description 启用状态 1 启用；0 未启用
 * @format int32
 **/
enable?: number;
};
/**
 * @title EmployeeDetailVO
 **/
export type ZmsxPartnerComponentsSchemasEmployeeDetailVO = {
/**
 * @description 员工ID 有则修改 无则新增
 * @format int64
 **/
empId: number;
/**
 * @description 员工简介
 **/
intro?: string;
/**
 * @description 员工名称
 **/
name: string;
/**
 * @description 职业
 **/
occupation: string;
/**
 * @description 员工手机号
 **/
phone: string;
/**
 * @description 员工头像
 **/
photo: string;
/**
 * @description 角色列表
 **/
roleList?: string[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
/**
 * @description 登录用户名
 **/
userName?: string;
};
/**
 * @title EmployeesDTO
 **/
export type ZmsxPartnerComponentsSchemasEmployeesDTO = {
/**
 * @description 员工ID 有则修改 无则新增
 * @format int64
 **/
empId: number;
/**
 * @description 员工简介
 **/
intro?: string;
/**
 * @description 员工姓名
 **/
name: string;
/**
 * @description 登录密码
 **/
password?: string;
phone?: string;
/**
 * @description 员工头像
 **/
photo: string;
/**
 * @description 员工角色,使用roleNo的数组集合，不要用roleId
 **/
roleList: string[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
/**
 * @description 登录用户名
 **/
userName: string;
};
/**
 * @title EmployeesPageDTO
 **/
export type ZmsxPartnerComponentsSchemasEmployeesPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 员工名称
 **/
empName?: string;
/**
 * @description 工号
 **/
empNo?: string;
/**
 * @description 状态 0 停用； 1 启用
 * @format int32
 **/
enable?: number;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @format int64
 **/
partnerId?: number;
/**
 * @description 权限编码
 **/
roleNo?: string;
/**
 * @description 员工登录名
 **/
userName?: string;
};
/**
 * @title EmployeesVO
 **/
export type ZmsxPartnerComponentsSchemasEmployeesVO = {
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 创建人
 **/
createdBy: string;
/**
 * @description 员工ID
 * @format int64
 **/
empId: number;
/**
 * @description 状态 0 停用；1 启用
 * @format int32
 **/
enable: number;
/**
 * @description 简介
 **/
intro: string;
/**
 * @description 员工姓名
 **/
name: string;
/**
 * @description 员工头像
 **/
photo: string;
/**
 * @description 角色
 **/
roles: string;
/**
 * @description 角色编号
 **/
rolesNo: string;
/**
 * @description 员工性别
 **/
sex: string;
/**
 * @description 员工用户名
 **/
userName: string;
};
/**
 * @title FeeRecordPageDTO
 **/
export type ZmsxPartnerComponentsSchemasFeeRecordPageDTO = {
/**
 * @description 月份起
 **/
beginMonth?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 月份止
 **/
endMonth?: string;
/**
 * @description 服务商名称
 **/
merchantName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 店铺名称
 **/
shopName?: string;
};
/**
 * @title FeeRuleAddDTO
 **/
export type ZmsxPartnerComponentsSchemasFeeRuleAddDTO = {
/**
 * @description 费率规则列表
 **/
feeRuleList: ZmsxPartnerComponentsSchemasFeeRuleDTO[];
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId: number;
};
/**
 * @title FeeRuleDTO
 **/
export type ZmsxPartnerComponentsSchemasFeeRuleDTO = {
/**
 * @description 阶段结束费用
 **/
endEqFee: string;
/**
 * @description 阶段费率
 **/
feeRate: string;
/**
 * @description 序列号
 * @format int32
 **/
indexNo: number;
/**
 * @description 阶段起始费用
 **/
startFee: string;
};
/**
 * @title FeeRuleVO
 **/
export type ZmsxPartnerComponentsSchemasFeeRuleVO = {
/**
 * @description 阶段结束费用
 **/
endEqFee: string;
/**
 * @description 阶段费率
 **/
feeRate: string;
/**
 * @description 序列号
 * @format int32
 **/
indexNo: number;
/**
 * @description 阶段起始费用
 **/
startFee: string;
};
/**
 * @title OpenApiKeyVO
 **/
export type ZmsxPartnerComponentsSchemasOpenApiKeyVO = {
/**
 * @description appId
 **/
appId: string;
/**
 * @description 密钥
 **/
secretKey: string;
};
/**
 * @title PageDTO
 **/
export type ZmsxPartnerComponentsSchemasPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title PartnerCommissionDTO
 **/
export type ZmsxPartnerComponentsSchemasPartnerCommissionDTO = {
/**
 * @description 月份起
 **/
beginMonth?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 月份止
 **/
endMonth?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 服务商名称
 **/
partnerName?: string;
};
/**
 * @title PartnerCommissionVO
 **/
export type ZmsxPartnerComponentsSchemasPartnerCommissionVO = {
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId: number;
/**
 * @description 服务商名称
 **/
partnerName: string;
/**
 * @description 业绩
 **/
performance: string;
/**
 * @description 佣金
 **/
rebateAmount: string;
/**
 * @description 可提现
 **/
waitBalance: string;
};
/**
 * @title PartnerDetailInfoVO
 **/
export type ZmsxPartnerComponentsSchemasPartnerDetailInfoVO = {
/**
 * @description 业务能力合集  STAGE_PAY:阶段付 SAFETY_PAY:安心充 AGGREGATE_PAY 聚合付 OWNER_SETTLE:业主方结算
 **/
abilities?: string[];
ability?: string;
/**
 * @description 收款账号类型 0支付宝；1 银行卡；
 * @format int32
 **/
accountType: number;
/**
 * @description 是不是超管
 **/
adminFlag?: boolean;
/**
 * @description 支付宝账号
 **/
alipayAccount?: string;
/**
 * @description 支付宝账号名
 **/
alipayAccountName?: string;
/**
 * @description 支付宝账号类型 PUB 对公支付宝账号，PRI 对私支付宝账号
 **/
alipayAccountType?: string;
/**
 * @description 服务商可查看页面合集
 **/
allowFunctions?: string[];
/**
 * @description 服务商可操作权限合集
 **/
allowOperates?: string[];
/**
 * @description 银行卡账号
 **/
bankAccount?: string;
/**
 * @description 开户行支行
 **/
bankBranchName?: string;
/**
 * @description 银行卡开户名
 **/
bankCardName?: string;
/**
 * @description 开户行名称
 **/
bankName?: string;
/**
 * @description 经营类目
 **/
businessCategory?: string;
/**
 * @description 经营类目描述
 **/
categoryDesc?: string;
contactPerson?: string;
contactPhone?: string;
/**
 * @description 服务商邮箱
 **/
email?: string;
/**
 * @description 登录员工ID
 * @format int64
 **/
employeeId?: number;
/**
 * @description 员工登录名
 **/
employeeLoginName?: string;
/**
 * @description 员工名称
 **/
employeeName?: string;
/**
 * @description 员工头像
 **/
employeePhoto?: string;
/**
 * @description 是否启用 0 不启用；1启用
 * @format int32
 **/
enable?: number;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic?: string;
/**
 * @description 法人证件照人相面
 **/
idcardFacePic?: string;
/**
 * @description 法人名称
 **/
legalName?: string;
/**
 * @description 法人证件号
 **/
legalNumber?: string;
/**
 * @description 营业执照编码
 **/
licenseNo?: string;
/**
 * @description 服务商id
 * @format int64
 **/
partnerId?: number;
/**
 * @description 营业执照
 **/
partnerLicensePic?: string;
/**
 * @description 商户LOGO
 **/
partnerLogo?: string;
/**
 * @description 商户全称
 **/
partnerName?: string;
/**
 * @description 服务商编号
 **/
partnerNo?: string;
/**
 * @description 服务商类型 0 企业；1 个体工商户
 * @format int32
 **/
partnerType?: number;
/**
 * @description 是否是对公账户 true 是对公账户；false不是对公账户
 **/
pubAccount?: boolean;
/**
 * @description 服务商是否重置过密码
 **/
resetPassword?: boolean;
/**
 * @description 总分账比例最大值
 **/
shareRatioMax?: number;
/**
 * @description 总分账比例最小值
 **/
shareRatioMin?: number;
/**
 * @description 服务商简称
 **/
shortName?: string;
};
/**
 * @title PartnerFeeRecordVO
 **/
export type ZmsxPartnerComponentsSchemasPartnerFeeRecordVO = {
/**
 * @description 流水金额
 **/
amount: number;
/**
 * @description 业务类型 WITHDRAW 提现；REBATE 返佣
 **/
bizType: string;
/**
 * @description 返佣时间
 **/
createTime: string;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 业绩
 **/
performance: number;
/**
 * @description 流水ID
 * @format int64
 **/
recordId: number;
/**
 * @description 返佣比例
 **/
scale: number;
/**
 * @description shopName
 **/
shopName: string;
};
/**
 * @title PartnerInfoDTO
 **/
export type ZmsxPartnerComponentsSchemasPartnerInfoDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 服务商名称
 **/
partnerName?: string;
};
/**
 * @title PartnerInfoVO
 **/
export type ZmsxPartnerComponentsSchemasPartnerInfoVO = {
/**
 * @description 业务能力合集  STAGE_PAY:阶段付 SAFETY_PAY:安心充 AGGREGATE_PAY 聚合付
 **/
abilities: string[];
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 是否启用 0 不启用；1启用
 * @format int32
 **/
enable: number;
/**
 * @description 放心Go分佣费率
 **/
feeRuleList: ZmsxPartnerComponentsSchemasFeeRuleVO[];
/**
 * @description 关联商户列表
 * @format int32
 **/
merchantCount: number;
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId: number;
/**
 * @description 商户全称
 **/
partnerName: string;
/**
 * @description 服务商编号
 **/
partnerNo: string;
/**
 * @description 服务商类型 0 企业；1 个体工商户
 * @format int32
 **/
partnerType: number;
/**
 * @description 总分账比例最大值
 **/
shareRatioMax: number;
/**
 * @description 总分账比例最小值
 **/
shareRatioMin: number;
};
/**
 * @title PartnerOpenAbilityDTO
 **/
export type ZmsxPartnerComponentsSchemasPartnerOpenAbilityDTO = {
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId: number;
/**
 * @description 开通类型： STAGE_PAY:阶段付 SAFETY_PAY:安心充 AGGREGATE_PAY;OWNER_SETTLE:业主方结算
 **/
type: string;
};
/**
 * @title PartnerStatusChangeDTO
 **/
export type ZmsxPartnerComponentsSchemasPartnerStatusChangeDTO = {
/**
 * @description 是否启用
 * @format int32
 **/
enable: number;
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId: number;
};
/**
 * @title PartnerWithdrawVO
 **/
export type ZmsxPartnerComponentsSchemasPartnerWithdrawVO = {
/**
 * @description 提现账号
 **/
alipayAccount: string;
/**
 * @description 提现金额
 **/
amount: string;
/**
 * @description 提现时间
 **/
createTime: string;
};
/**
 * @title Result
 **/
export type ZmsxPartnerComponentsSchemasResult = {
/**
 * @format int32
 **/
code: number;
data: {[x: string | number]: any};
msg: string;
success: boolean;
};
/**
 * @title RoleInfoDTO
 **/
export type ZmsxPartnerComponentsSchemasRoleInfoDTO = {
/**
 * @description 服务商后台功能列表
 **/
functionList: string[];
/**
 * @description 服务商后台权限列表
 **/
operateList: string[];
/**
 * @description 角色描述
 **/
roleDesc: string;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
/**
 * @description 角色名称
 **/
roleName: string;
};
/**
 * @title RoleInfoVO
 **/
export type ZmsxPartnerComponentsSchemasRoleInfoVO = {
/**
 * @description 角色功能列表
 **/
functionList: string[];
/**
 * @description 操作权限列表
 **/
operateList: string[];
/**
 * @description 角色描述
 **/
roleDesc: string;
/**
 * @description 状态，启用/停用
 **/
roleEnable: boolean;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
/**
 * @description 角色名称
 **/
roleName: string;
/**
 * @description 角色编号
 **/
roleNo: string;
/**
 * @description 角色类型,INIT: 预设，DEFINED: 自定义
 **/
roleType: string;
};
/**
 * @title RolePageDTO
 **/
export type ZmsxPartnerComponentsSchemasRolePageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 角色描述
 **/
roleDesc?: string;
/**
 * @description 角色状态，true: 启用，false: 禁用
 **/
roleEnable?: boolean;
/**
 * @description 角色名称
 **/
roleName?: string;
};
/**
 * @title RoleSwitchDTO
 **/
export type ZmsxPartnerComponentsSchemasRoleSwitchDTO = {
/**
 * @description 状态，true: 启用，false: 禁用
 **/
roleEnable: boolean;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
};
/**
 * @title TotalPartnerCommissionVO
 **/
export type ZmsxPartnerComponentsSchemasTotalPartnerCommissionVO = {partnerCommissionPage: ZmsxPartnerComponentsSchemasPageVO_PartnerCommissionVO_;
/**
 * @description 业绩
 **/
performance: string;
/**
 * @description 佣金
 **/
rebateAmount: string;
/**
 * @description 待提现
 **/
waitBalance: string;
};
/**
 * @title UpdatePartnerDTO
 **/
export type ZmsxPartnerComponentsSchemasUpdatePartnerDTO = {
/**
 * @description 支付宝账号
 **/
alipayAccount?: string;
/**
 * @description 支付宝账号名
 **/
alipayAccountName?: string;
/**
 * @description 支付宝账号类型 PUB 对公支付宝账号，PRI 对私支付宝账号
 **/
alipayAccountType?: string;
/**
 * @description 银行卡账号
 **/
bankAccount?: string;
/**
 * @description 开户行支行
 **/
bankBranchName?: string;
/**
 * @description 银行卡开户名
 **/
bankCardName?: string;
/**
 * @description 开户行名称
 **/
bankName?: string;
/**
 * @description 经营类目
 **/
businessCategory: string;
/**
 * @description 经营类目经营类目描述
 **/
categoryDesc?: string;
/**
 * @description 联系人
 **/
contactPerson?: string;
/**
 * @description 联系人手机号
 **/
contactPhone?: string;
/**
 * @description 服务商邮箱
 **/
email?: string;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人相面
 **/
idcardFacePic: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人证件号
 **/
legalNumber: string;
/**
 * @description 营业执照编码
 **/
licenseNo: string;
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId?: number;
/**
 * @description 营业执照
 **/
partnerLicensePic: string;
/**
 * @description 服务商LOGO
 **/
partnerLogo: string;
/**
 * @description 服务商全称
 **/
partnerName: string;
/**
 * @description 服务商类型 0 企业；1 个体工商户
 * @format int32
 **/
partnerType: number;
/**
 * @description 是否是对公账户 true 是对公账户；false不是对公账户
 **/
pubAccount?: boolean;
/**
 * @description 服务商简称
 **/
shortName: string;
};
/**
 * @title UpdatePartnerPasswordDTO
 **/
export type ZmsxPartnerComponentsSchemasUpdatePartnerPasswordDTO = {
/**
 * @description 新密码
 **/
newPassword: string;
/**
 * @description 确认新密码
 **/
newPasswordConfirm: string;
/**
 * @description 原密码
 **/
oldPassword?: string;
};
/**
 * @title UpdatePartnerShareRatioDTO
 **/
export type ZmsxPartnerComponentsSchemasUpdatePartnerShareRatioDTO = {
/**
 * @description 最大比例
 **/
maxRatio: string;
/**
 * @description 最小比例
 **/
minRatio: string;
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId: number;
};
/**
 * @title PageVO«EmployeesVO»
 **/
export type ZmsxPartnerComponentsSchemasPageVO_EmployeesVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPartnerComponentsSchemasEmployeesVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PartnerCommissionVO»
 **/
export type ZmsxPartnerComponentsSchemasPageVO_PartnerCommissionVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPartnerComponentsSchemasPartnerCommissionVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PartnerFeeRecordVO»
 **/
export type ZmsxPartnerComponentsSchemasPageVO_PartnerFeeRecordVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPartnerComponentsSchemasPartnerFeeRecordVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PartnerInfoVO»
 **/
export type ZmsxPartnerComponentsSchemasPageVO_PartnerInfoVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPartnerComponentsSchemasPartnerInfoVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PartnerWithdrawVO»
 **/
export type ZmsxPartnerComponentsSchemasPageVO_PartnerWithdrawVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPartnerComponentsSchemasPartnerWithdrawVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«RoleInfoVO»
 **/
export type ZmsxPartnerComponentsSchemasPageVO_RoleInfoVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPartnerComponentsSchemasRoleInfoVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«BrokerageStatisticsVO»
 **/
export type ZmsxPartnerComponentsSchemasResult_BrokerageStatisticsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasBrokerageStatisticsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«EmployeeDetailVO»
 **/
export type ZmsxPartnerComponentsSchemasResult_EmployeeDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasEmployeeDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«List«EmployeesVO»»
 **/
export type ZmsxPartnerComponentsSchemasResult_List_EmployeesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasEmployeesVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«FeeRuleVO»»
 **/
export type ZmsxPartnerComponentsSchemasResult_List_FeeRuleVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasFeeRuleVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«RoleInfoVO»»
 **/
export type ZmsxPartnerComponentsSchemasResult_List_RoleInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasRoleInfoVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«OpenApiKeyVO»
 **/
export type ZmsxPartnerComponentsSchemasResult_OpenApiKeyVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasOpenApiKeyVO;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«EmployeesVO»»
 **/
export type ZmsxPartnerComponentsSchemasResult_PageVO_EmployeesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasPageVO_EmployeesVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«PartnerInfoVO»»
 **/
export type ZmsxPartnerComponentsSchemasResult_PageVO_PartnerInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasPageVO_PartnerInfoVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«PartnerWithdrawVO»»
 **/
export type ZmsxPartnerComponentsSchemasResult_PageVO_PartnerWithdrawVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasPageVO_PartnerWithdrawVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«RoleInfoVO»»
 **/
export type ZmsxPartnerComponentsSchemasResult_PageVO_RoleInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasPageVO_RoleInfoVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PartnerDetailInfoVO»
 **/
export type ZmsxPartnerComponentsSchemasResult_PartnerDetailInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasPartnerDetailInfoVO;
msg: string;
success: boolean;
};
/**
 * @title Result«RoleInfoVO»
 **/
export type ZmsxPartnerComponentsSchemasResult_RoleInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasRoleInfoVO;
msg: string;
success: boolean;
};
/**
 * @title Result«TotalPartnerCommissionVO»
 **/
export type ZmsxPartnerComponentsSchemasResult_TotalPartnerCommissionVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPartnerComponentsSchemasTotalPartnerCommissionVO;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxPartnerComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
/**
 * @title Result«string»
 **/
export type ZmsxPartnerComponentsSchemasResult_string_ = {
/**
 * @format int32
 **/
code: number;
data: string;
msg: string;
success: boolean;
};
export interface PathsZmsxPartner{'/partner/console/feeRecord/commission': {post: {
param:{
/**
 * @description commissionDTO
 **/
body: ZmsxPartnerComponentsSchemasPartnerCommissionDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_TotalPartnerCommissionVO_;
};
};
'/partner/console/mng/info/change/enable': {put: {
param:{
/**
 * @description statusChangeDTO
 **/
body: ZmsxPartnerComponentsSchemasPartnerStatusChangeDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/console/mng/info/details/{partnerId}': {get: {
param:{path: {
/**
 * @description partnerId
 * @format int64
 **/
partnerId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_PartnerDetailInfoVO_;
};
};
'/partner/console/mng/info/openAbilities': {post: {
param:{
/**
 * @description abilityDTO
 **/
body: ZmsxPartnerComponentsSchemasPartnerOpenAbilityDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/console/mng/info/page': {post: {
param:{
/**
 * @description infoDTO
 **/
body: ZmsxPartnerComponentsSchemasPartnerInfoDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_PageVO_PartnerInfoVO_;
};
};
'/partner/console/mng/info/save': {put: {
param:{
/**
 * @description addPartner
 **/
body: ZmsxPartnerComponentsSchemasAddPartnerDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/console/mng/info/update': {put: {
param:{
/**
 * @description updatePartner
 **/
body: ZmsxPartnerComponentsSchemasUpdatePartnerDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/console/mng/info/updateShareRatio': {post: {
param:{
/**
 * @description updatePartnerShareRatioDTO
 **/
body: ZmsxPartnerComponentsSchemasUpdatePartnerShareRatioDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/console/partner/fee/rule': {post: {
param:{
/**
 * @description feeRuleAddDTO
 **/
body: ZmsxPartnerComponentsSchemasFeeRuleAddDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_PartnerDetailInfoVO_;
};
};
'/partner/console/partner/fee/rule/{partnerId}': {get: {
param:{path: {
/**
 * @description partnerId
 * @format int64
 **/
partnerId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_List_FeeRuleVO_;
};
};
'/partner/p/employee/change': {put: {
param:{
/**
 * @description enableDTO
 **/
body: ZmsxPartnerComponentsSchemasChangeEmployeeEnableDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/p/employee/detail': {get: {
param:{query: {
/**
 * @description empId
 * @format int64
 **/
empId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_EmployeeDetailVO_;
};
};
'/partner/p/employee/edit': {put: {
param:{
/**
 * @description employeesDTO
 **/
body: ZmsxPartnerComponentsSchemasEmployeesDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/p/employee/employees': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_List_EmployeesVO_;
};
};
'/partner/p/employee/page': {post: {
param:{
/**
 * @description employeesPageDTO
 **/
body: ZmsxPartnerComponentsSchemasEmployeesPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_PageVO_EmployeesVO_;
};
};
'/partner/p/fee/balance': {get: {
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_string_;
};
};
'/partner/p/fee/rebate': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxPartnerComponentsSchemasFeeRecordPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_BrokerageStatisticsVO_;
};
};
'/partner/p/fee/withdraw': {get: {
param:{query: {
/**
 * @description amount
 **/
amount: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/p/fee/withdrawRecord': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxPartnerComponentsSchemasPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_PageVO_PartnerWithdrawVO_;
};
};
'/partner/p/info': {get: {
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_PartnerDetailInfoVO_;
};
};
'/partner/p/info/getOpenApiKey': {get: {
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_OpenApiKeyVO_;
};
};
'/partner/p/info/resetOpenApiKey': {get: {
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/p/info/updatePassword': {post: {
param:{
/**
 * @description updatePartnerPasswordDTO
 **/
body: ZmsxPartnerComponentsSchemasUpdatePartnerPasswordDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult;
};
};
'/partner/p/role': {post: {
param:{
/**
 * @description roleInfoDTO
 **/
body: ZmsxPartnerComponentsSchemasRoleInfoDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/p/role/delete': {delete: {
param:{query: {
/**
 * @description roleId
 * @format int64
 **/
roleId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
'/partner/p/role/detail': {get: {
param:{query: {
/**
 * @description roleId
 * @format int64
 **/
roleId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_RoleInfoVO_;
};
};
'/partner/p/role/list': {get: {
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_List_RoleInfoVO_;
};
};
'/partner/p/role/page': {post: {
param:{
/**
 * @description rolePageDTO
 **/
body: ZmsxPartnerComponentsSchemasRolePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_PageVO_RoleInfoVO_;
};
};
'/partner/p/role/switchEnable': {post: {
param:{
/**
 * @description roleSwitchDTO
 **/
body: ZmsxPartnerComponentsSchemasRoleSwitchDTO;
}
/**
 * @description OK
 **/
response: ZmsxPartnerComponentsSchemasResult_Void_;
};
};
}

/**
 * @title AppGoodsCardDetailVO
 **/
export type ZmsxGoodsComponentsSchemasAppGoodsCardDetailVO = {
/**
 * @description 卡券ID
 * @format int64
 **/
cardId: number;
/**
 * @description 有效天数
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 原价
 **/
originalPrice: string;
/**
 * @description 价格
 **/
price: number;
/**
 * @description 额度（次数卡：次数，周期卡：天数）
 * @format int32
 **/
quota: number;
/**
 * @description 卡券规格项ID
 * @format int64
 **/
skuId: number;
/**
 * @description sku编码
 **/
skuNo: string;
/**
 * @description 扣款方式：FIX：固定金额，FIRST：首期金额
 **/
stageDeductType: string;
/**
 * @description 后续每期扣款大小（每期金额）
 * @format double
 **/
stageEachDeduct: number;
/**
 * @description 首期扣款大小（首期金额）
 * @format double
 **/
stageFirstDeduct: number;
/**
 * @description 分期数
 * @format int32
 **/
stageNum: number;
/**
 * @description 是否是阶段付 true 阶段付; false 不是阶段付
 **/
stagePay: boolean;
};
/**
 * @title AppGoodsCardTypeVO
 **/
export type ZmsxGoodsComponentsSchemasAppGoodsCardTypeVO = {
/**
 * @description 卡券ID
 * @format int64
 **/
cardId?: number;
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡
 **/
cardType?: string;
/**
 * @description 商品编号
 **/
code: string;
/**
 * @description 有效天数
 * @format int32
 **/
effectiveDay?: number;
/**
 * @description 商品ID
 * @format int64
 **/
id?: number;
/**
 * @description 是否多个规格
 **/
isMore?: boolean;
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 原价
 **/
originalPrice?: string;
/**
 * @description 价格--如果是阶段付商品展示：首期价格；普通商品就是原价
 * @format double
 **/
price?: number;
/**
 * @description 额度（次数卡：次数，周期卡：天数）
 * @format int32
 **/
quota?: number;
/**
 * @description 卡券规格项ID
 * @format int64
 **/
skuId?: number;
/**
 * @description 当前卡卷规格是否是阶段付
 **/
skuStagePay?: boolean;
/**
 * @description 后续每阶段价格： 只有阶段付商品才展示
 * @format double
 **/
stageEachDeduct?: number;
/**
 * @description 分期数
 * @format int32
 **/
stageNum?: number;
/**
 * @description 是否支持阶段付
 **/
stagePay?: boolean;
};
/**
 * @title AppGoodsEquityPageDTO
 **/
export type ZmsxGoodsComponentsSchemasAppGoodsEquityPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 所属店铺ID
 * @format int64
 **/
shopId?: number;
};
/**
 * @title AppGoodsEquityVO
 **/
export type ZmsxGoodsComponentsSchemasAppGoodsEquityVO = {
/**
 * @description 权益描述
 **/
description: string;
/**
 * @description 折扣
 **/
discount: string;
/**
 * @description 有效期
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 权益卡类型 TIMES 次卡；QUOTA 额度卡
 **/
equityType: string;
/**
 * @description 赠送额度（次/分）
 **/
giveQuota: string;
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 库存
 * @format int32
 **/
inventory: number;
/**
 * @description 关联项目
 **/
itemNames: string[];
/**
 * @description 价格
 **/
price: string;
/**
 * @description 总销量
 * @format int32
 **/
sale: number;
/**
 * @description 适用门店
 **/
shopNames: string[];
};
/**
 * @title AppGoodsVO
 **/
export type ZmsxGoodsComponentsSchemasAppGoodsVO = {
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡
 **/
cardType: string;
/**
 * @description 商品描述
 **/
description: string;
/**
 * @description 电子卡卷规格
 **/
goodsCardDetailVOList: ZmsxGoodsComponentsSchemasAppGoodsCardDetailVO[];
/**
 * @description 会员特权
 **/
memberPrivilegeTag: string[];
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 支持消费项
 **/
supportItemTag: string[];
/**
 * @description 支持门店
 **/
supportShopAddr: string[];
/**
 * @description 支持门店
 * @format int32
 **/
supportShopNum: number;
};
/**
 * @title AppGroupBuyOrderVO
 **/
export type ZmsxGoodsComponentsSchemasAppGroupBuyOrderVO = {
/**
 * @description 合计金额
 **/
actual_amount: string;
/**
 * @description 下单日期
 **/
date_start: string;
/**
 * @description 名字
 **/
name: string;
/**
 * @description 订单编号
 **/
orderId: string;
/**
 * @description 支付状态
 **/
payState: string;
};
/**
 * @title AppGroupBuyVO
 **/
export type ZmsxGoodsComponentsSchemasAppGroupBuyVO = {
/**
 * @description 是否可用，可用、不可用[未到可用时间、过期的、已核销的团购商品]
 **/
available: string;
/**
 * @description 介绍
 **/
instructions: string;
/**
 * @description 团购商品名
 **/
name: string;
/**
 * @description 可用店铺
 **/
shopName: string[];
/**
 * @description 结束时间
 **/
timeEnd: string;
/**
 * @description 开始时间
 **/
timeStart: string;
};
/**
 * @title AppGroupOrderDTO
 **/
export type ZmsxGoodsComponentsSchemasAppGroupOrderDTO = {
/**
 * @description 支付状态
 **/
payState: string;
};
/**
 * @title AppGroupPageDTO
 **/
export type ZmsxGoodsComponentsSchemasAppGroupPageDTO = {
/**
 * @description 团购状态
 **/
groupBuyState: string;
};
/**
 * @title AppMerchantEquityItemsVO
 **/
export type ZmsxGoodsComponentsSchemasAppMerchantEquityItemsVO = {
/**
 * @description 商品id
 * @format int64
 **/
goodsId: number;
/**
 * @description 项目列表
 **/
items: ZmsxGoodsComponentsSchemasItemVO[];
};
/**
 * @title AppReceiveGoodsPageDTO
 **/
export type ZmsxGoodsComponentsSchemasAppReceiveGoodsPageDTO = {
/**
 * @description 商品分类  FITNESS 健身 SWIM 游泳；YOGA 瑜伽；BADMINTON 羽毛球；BILLIARDS 台球；PING_PONG 乒乓球；BASKETBALL 篮球；FOOTBALL 足球；BOWLING 保龄球；TENNIS 网球；SQUASH 壁球；GOLF 高尔夫；STRIKE 武术搏击；KARATE 空手道；TAEKWONDO 跆拳道；MUAY_THAI 泰拳; WRESTLING 摔跤；BOXING 拳击； RACING_CAR 赛车；SPORT_CLIMBING 攀岩；SHOOTING 射击射箭；OTHER 其他
 **/
classify?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商品名称
 **/
goodsName?: string;
/**
 * @description 纬度
 * @format double
 **/
latitude?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @description 最大金额
 **/
maxPrice?: number;
/**
 * @description 最小金额
 **/
minPrice?: number;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title AppReceiveGoodsShopVO
 **/
export type ZmsxGoodsComponentsSchemasAppReceiveGoodsShopVO = {
/**
 * @description 购买须知
 **/
buyNotice: string;
/**
 * @description 商品描述
 **/
description: string;
/**
 * @description 商品封面图
 **/
goodsCover: string;
/**
 * @description 商品id
 * @format int64
 **/
goodsId: number;
/**
 * @description 适用门店
 **/
listShopNames: string[];
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 原价（划线价）
 **/
originalPrice: string;
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId: number;
/**
 * @description 售价
 **/
price: string;
shopDetail: ZmsxGoodsComponentsSchemasShopDetail;
/**
 * @description 门店id
 **/
shopId: string;
/**
 * @description 适用门店
 **/
shopNames: string;
/**
 * @description 商品状态
 **/
status: string;
/**
 * @description 可用门店类型
 **/
useShopType: string;
};
/**
 * @title ApplyShops
 **/
export type ZmsxGoodsComponentsSchemasApplyShops = {
/**
 * @description 支持店铺Id
 **/
shopId: string;
/**
 * @description 支持店铺名称
 **/
shopName: string;
};
/**
 * @title ApplyShopsDTO
 **/
export type ZmsxGoodsComponentsSchemasApplyShopsDTO = {
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 关联门店合集
 **/
shops?: ZmsxGoodsComponentsSchemasApplyShops[];
};
/**
 * @title ApplyShopsVO
 **/
export type ZmsxGoodsComponentsSchemasApplyShopsVO = {
/**
 * @description 支持店铺Id
 **/
shopId: string;
/**
 * @description 支持店铺名称
 **/
shopName: string;
};
/**
 * @title BaseEntityIdDTO
 **/
export type ZmsxGoodsComponentsSchemasBaseEntityIdDTO = {
/**
 * @description 主键id
 * @format int64
 **/
id: number;
};
/**
 * @title CalculationStagePayDTO
 **/
export type ZmsxGoodsComponentsSchemasCalculationStagePayDTO = {
/**
 * @description 扣款日期类型：END_MOUTH：每月月底，SPECIFY：指定日期，BUY_SEVEN_DAY：购买七天后扣款
 **/
stageDeductDateType: string;
/**
 * @description 指定扣款日期(每月几号)
 * @format int32
 **/
stageDeductSpecifyDay: number;
/**
 * @description 扣款方式：FIX：固定金额，FIRST：首期金额
 **/
stageDeductType: string;
/**
 * @description 首期支付金额
 **/
stageFirstDeduct: number;
/**
 * @description 期数
 * @format int32
 **/
stageNum: number;
/**
 * @description 卡类型 订购类型 月卡 MONTH预约 ADVANCE周卡 WEEK优惠月卡 DISCOUNT_MONTH优惠周卡 DISCOUNT_WEEK优惠次卡 DISCOUNT_TIME
 **/
subscriptionType: string;
/**
 * @description sku总价 优惠卡项时传price的值 否则传原价
 **/
totalAmount: number;
};
/**
 * @title CardSkuInfoDTO
 **/
export type ZmsxGoodsComponentsSchemasCardSkuInfoDTO = {
/**
 * @description 库存
 * @format int32
 **/
inventory: number;
/**
 * @description 不限库存标识
 **/
inventoryUnlimited?: boolean;
/**
 * @description SKU id
 * @format int64
 **/
skuId?: number;
};
/**
 * @title CardSkuStagePayDTO
 **/
export type ZmsxGoodsComponentsSchemasCardSkuStagePayDTO = {
/**
 * @description 是否允许解约
 **/
allowBreakContract: boolean;
/**
 * @description 允许解约周期（多少期后可以解约）
 * @format int32
 **/
breakContractNum: number;
/**
 * @description 扣款日期类型：END_MOUTH：每月月底，SPECIFY：指定日期 ，BUY_SEVEN_DAY：购买七天后扣款
 **/
stageDeductDateType: string;
/**
 * @description 指定扣款日期(每月几号)
 * @format int32
 **/
stageDeductSpecifyDay: number;
/**
 * @description 扣款方式：FIX：固定金额，FIRST：首期金额 
 **/
stageDeductType: string;
/**
 * @description 首期扣款大小（首期金额）
 **/
stageFirstDeduct: number;
/**
 * @description 阶段付信息ID，为空则新增，不为空则修改
 * @format int64
 **/
stageId: number;
/**
 * @description 分期数
 * @format int32
 **/
stageNum: number;
};
/**
 * @title CardSkuStagePayVO
 **/
export type ZmsxGoodsComponentsSchemasCardSkuStagePayVO = {
/**
 * @description 是否允许解约
 **/
allowBreakContract: boolean;
/**
 * @description 允许解约周期（多少期后可以解约）
 * @format int32
 **/
breakContractNum: number;
/**
 * @description 扣款日期类型：END_MOUTH：每月月底，SPECIFY：指定日期
 **/
stageDeductDateType: string;
/**
 * @description 指定扣款日期(每月几号/每周周几)
 * @format int32
 **/
stageDeductSpecifyDay: number;
/**
 * @description 扣款方式：FIX：固定金额，FIRST：首期金额
 **/
stageDeductType: string;
/**
 * @description 首期扣款大小（首期金额）
 **/
stageFirstDeduct: number;
/**
 * @description 分期数
 * @format int32
 **/
stageNum: number;
};
/**
 * @title CardSkuVO
 **/
export type ZmsxGoodsComponentsSchemasCardSkuVO = {
/**
 * @description 是否删除
 **/
deleted: boolean;
/**
 * @description 有效期
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 库存
 * @format int32
 **/
inventory: number;
/**
 * @description 不限库存标识
 **/
inventoryUnlimited: boolean;
/**
 * @description 价格
 **/
price: number;
/**
 * @description 额度（次数卡：次数，周期卡：天数）
 * @format int32
 **/
quota: number;
/**
 * @description 商品SKUID
 * @format int64
 **/
skuId: number;
};
/**
 * @title ChangeGoodsStatusDTO
 **/
export type ZmsxGoodsComponentsSchemasChangeGoodsStatusDTO = {
/**
 * @description 要操作的商品ID合集
 **/
goodsIds: number[];
/**
 * @description 商品状态：STOCK：仓库中(下架)，SALE：销售中，SELL_OUT：售罄
 **/
status?: string;
/**
 * @description 类型 CARD 阶段付商品；EQUITY 权益商品; RECEIVE 体验商品
 **/
type?: string;
};
/**
 * @title ChangeInventoryDTO
 **/
export type ZmsxGoodsComponentsSchemasChangeInventoryDTO = {
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 库存
 * @format int32
 **/
inventory: number;
/**
 * @description 不限库存标识
 **/
inventoryUnlimited?: boolean;
};
/**
 * @title EquityPageDTO
 **/
export type ZmsxGoodsComponentsSchemasEquityPageDTO = {
/**
 * @description 权益编号
 **/
code?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @format int64
 **/
merchantId?: number;
/**
 * @description 商品名称
 **/
name?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 商品状态：STOCK：仓库中，SALE：销售中，SELL_OUT：售罄
 **/
status?: string;
};
/**
 * @title EquityPageVO
 **/
export type ZmsxGoodsComponentsSchemasEquityPageVO = {
/**
 * @description 在售门店
 **/
applyShops: ZmsxGoodsComponentsSchemasApplyShops[];
/**
 * @description 商品编码
 **/
code: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 折扣
 **/
discount: string;
/**
 * @description 有效期，为空则长期有效
 * @format int32
 **/
effectiveDay: number;
/**
 * @description  权益卡类型 TIMES 次卡；QUOTA 额度卡
 **/
equityType: string;
/**
 * @description 赠送额度
 **/
giveQuota: string;
/**
 * @description 商品id
 * @format int64
 **/
goodsId: number;
/**
 * @description 总库存
 * @format int32
 **/
inventory: number;
/**
 * @description 关联项目
 **/
itemNames: string;
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 商品价格区间（最小值~最大值）
 **/
price: string;
/**
 * @description 总销量
 * @format int32
 **/
sale: number;
/**
 * @description 在售门店
 **/
shopNames: string;
/**
 * @description 商品状态
 **/
status: string;
/**
 * @description 虚拟销量
 * @format int32
 **/
virtualSale: number;
};
/**
 * @title GetUseScopeDTO
 **/
export type ZmsxGoodsComponentsSchemasGetUseScopeDTO = {
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
};
/**
 * @title GoodsCardDTO
 **/
export type ZmsxGoodsComponentsSchemasGoodsCardDTO = {
/**
 * @description cardId 为空表示新增 不为空则为修改
 * @format int64
 **/
cardId?: number;
/**
 * @description 会员特权、分隔
 **/
memberPrivilegeTag: string;
/**
 * @description 商品SKU
 **/
skus: ZmsxGoodsComponentsSchemasGoodsCardSkuDTO[];
/**
 * @description 订购类型 月卡 MONTH次卡 TIME预约 ADVANCE周卡 WEEK优惠月卡 DISCOUNT_MONTH优惠周卡 DISCOUNT_WEEK优惠次卡 DISCOUNT_TIME装修模式 DECORATION配送模式 DELIVERY
 **/
subscriptionType?: string;
/**
 * @description 支持消费项、分隔
 **/
supportItemTag?: string;
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡
 **/
type: string;
/**
 * @description 是否有核销码
 **/
verification?: boolean;
};
/**
 * @title GoodsCardDetailVO
 **/
export type ZmsxGoodsComponentsSchemasGoodsCardDetailVO = {
/**
 * @description cardId 为空表示新增 不为空则为修改
 * @format int64
 **/
cardId?: number;
/**
 * @description 会员特权,分隔
 **/
memberPrivilegeTag: string;
/**
 * @description 商品SKU
 **/
skus: ZmsxGoodsComponentsSchemasGoodsCardSkuDetailVO[];
/**
 * @description 订购类型 月卡 MONTH次卡 TIME预约 ADVANCE周卡 WEEK优惠月卡 DISCOUNT_MONTH优惠周卡 DISCOUNT_WEEK优惠次卡 DISCOUNT_TIME装修模式 DECORATION配送模式 DELIVERY
 **/
subscriptionType?: string;
/**
 * @description 支持消费项
 **/
supportItemTag: string;
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡
 **/
type: string;
/**
 * @description 是否有核销码
 **/
verification?: boolean;
};
/**
 * @title GoodsCardPageDTO
 **/
export type ZmsxGoodsComponentsSchemasGoodsCardPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 商品类型
 **/
type?: string;
};
/**
 * @title GoodsCardSkuDTO
 **/
export type ZmsxGoodsComponentsSchemasGoodsCardSkuDTO = {
/**
 * @description 所属卡ID
 * @format int64
 **/
cardId?: number;
/**
 * @description 是否删除(针对sku删除操作不单独提供接口，前端必传该字段) true 删除；false 未删除
 **/
deleted: boolean;
/**
 * @description 有效天数
 * @format int32
 **/
effectiveDay?: number;
/**
 * @description 库存
 * @format int32
 **/
inventory?: number;
/**
 * @description 不限库存标识
 **/
inventoryUnlimited?: boolean;
/**
 * @description 原价
 **/
originalPrice?: number;
/**
 * @description 价格
 **/
price?: number;
/**
 * @description 额度（次数卡：次数，周期卡：天数）
 * @format int32
 **/
quota?: number;
/**
 * @description 序号，用作排序
 * @format int32
 **/
serialNum?: number;
/**
 * @description skuId 存在即为修改 为空则新增
 * @format int64
 **/
skuId?: number;
skuStagePay?: ZmsxGoodsComponentsSchemasCardSkuStagePayDTO;
/**
 * @description 阶段付标识
 **/
stagePay?: boolean;
};
/**
 * @title GoodsCardSkuDetailVO
 **/
export type ZmsxGoodsComponentsSchemasGoodsCardSkuDetailVO = {
/**
 * @description 所属卡ID
 * @format int64
 **/
cardId?: number;
/**
 * @description 是否删除(针对sku删除操作不单独提供接口，前端必传该字段) true 删除；false 未删除
 **/
deleted: boolean;
/**
 * @description 有效天数
 * @format int32
 **/
effectiveDay?: number;
/**
 * @description 库存
 * @format int32
 **/
inventory?: number;
/**
 * @description 不限库存标识
 **/
inventoryUnlimited?: boolean;
/**
 * @description 原价
 **/
originalPrice?: string;
/**
 * @description 价格
 **/
price?: string;
/**
 * @description 额度（次数卡：次数，周期卡：天数）
 * @format int32
 **/
quota?: number;
/**
 * @description 序号，用作排序
 * @format int32
 **/
serialNum?: number;
/**
 * @description skuId
 * @format int64
 **/
skuId?: number;
skuStagePay?: ZmsxGoodsComponentsSchemasCardSkuStagePayVO;
/**
 * @description 阶段付标识
 **/
stagePay?: boolean;
};
/**
 * @title GoodsDetailVO
 **/
export type ZmsxGoodsComponentsSchemasGoodsDetailVO = {
/**
 * @description 适用门店
 **/
applyShops: ZmsxGoodsComponentsSchemasApplyShopsVO[];
/**
 * @description 商品描述
 **/
description?: string;
goodsCard?: ZmsxGoodsComponentsSchemasGoodsCardDetailVO;
/**
 * @description 商品封面图
 **/
goodsCover?: string;
goodsEquity?: ZmsxGoodsComponentsSchemasGoodsEquityVO;
/**
 * @description 商品Id
 * @format int64
 **/
goodsId: number;
goodsReceive?: ZmsxGoodsComponentsSchemasGoodsReceiveVO;
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 商品状态：STOCK：仓库中(下架)，SALE：销售中，SELL_OUT：售罄
 **/
status: string;
/**
 * @description 商品类型：CARD：电子卡券
 **/
type: string;
};
/**
 * @title GoodsEquityDTO
 **/
export type ZmsxGoodsComponentsSchemasGoodsEquityDTO = {
/**
 * @description 提前通知天数
 * @format int32
 **/
advanceNotice?: number;
/**
 * @description 折扣
 **/
discount?: number;
/**
 * @description 有效期，为空则长期有效
 * @format int32
 **/
effectiveDay?: number;
/**
 * @description 权益商品主键 有则修改无则新增
 * @format int64
 **/
equityId?: number;
/**
 * @description 权益卡类型 TIMES 次卡；QUOTA 额度卡
 **/
equityType: string;
/**
 * @description 赠送额度
 **/
giveQuota?: number;
/**
 * @description 库存
 * @format int32
 **/
inventory: number;
/**
 * @description 关联项目ID合集
 **/
itemIds?: number[];
/**
 * @description 关联项目类型 ALL 全部项目；ASSIGN 指定项目
 **/
itemRelationType: string;
/**
 * @description 价格
 **/
price: number;
/**
 * @description 虚拟销量
 * @format int32
 **/
virtualSale: number;
};
/**
 * @title GoodsEquityPageDTO
 **/
export type ZmsxGoodsComponentsSchemasGoodsEquityPageDTO = {
/**
 * @description 权益编码
 **/
code?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 所属商户
 * @format int64
 **/
merchantId?: number;
/**
 * @description 权益名称
 **/
name?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 商品状态：STOCK：仓库中(下架)，SALE：销售中，SELL_OUT：售罄
 **/
status: string;
};
/**
 * @title GoodsEquityPageVO
 **/
export type ZmsxGoodsComponentsSchemasGoodsEquityPageVO = {
/**
 * @description 商品编码
 **/
code: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 折扣
 **/
discount: string;
/**
 * @description 有效期，为空则长期有效
 * @format int32
 **/
effectiveDay: number;
/**
 * @description  权益卡类型 TIMES 次卡；QUOTA 额度卡
 **/
equityType: string;
/**
 * @description 赠送额度
 **/
giveQuota: string;
/**
 * @description 商品id
 * @format int64
 **/
goodsId: number;
/**
 * @description 总库存
 * @format int32
 **/
inventory: number;
/**
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 商品价格区间（最小值~最大值）
 **/
price: string;
/**
 * @description 总销量
 * @format int32
 **/
sale: number;
/**
 * @description 商品状态
 **/
status: string;
subsidyRule: ZmsxGoodsComponentsSchemasSubsidyRuleVO;
/**
 * @description 虚拟销量
 * @format int32
 **/
virtualSale: number;
};
/**
 * @title GoodsEquityVO
 **/
export type ZmsxGoodsComponentsSchemasGoodsEquityVO = {
/**
 * @description 提前通知天数
 * @format int32
 **/
advanceNotice?: number;
/**
 * @description 折扣
 **/
discount?: string;
/**
 * @description 有效期
 * @format int32
 **/
effectiveDay?: number;
/**
 * @description 权益商品主键
 * @format int64
 **/
equityId?: number;
/**
 * @description 权益卡类型 TIMES 次卡；QUOTA 额度卡
 **/
equityType?: string;
/**
 * @description 赠送额度
 **/
giveQuota?: string;
/**
 * @description 关联商品主体ID
 * @format int64
 **/
goodsId?: number;
/**
 * @description 库存
 * @format int32
 **/
inventory?: number;
/**
 * @description 关联项目类型 ALL 全部项目；ASSIGN 指定项目
 **/
itemRelationType: string;
/**
 * @description 价格
 **/
price?: string;
/**
 * @description 关联项目，类型如果是ASSIGN时才会有值
 **/
relationItem?: ZmsxGoodsComponentsSchemasRelationItemVO[];
/**
 * @description 虚拟销量
 * @format int32
 **/
virtualSale?: number;
};
/**
 * @title GoodsPageDTO
 **/
export type ZmsxGoodsComponentsSchemasGoodsPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商品编码
 **/
goodsCode?: string;
/**
 * @description 商品名称
 **/
goodsName?: string;
/**
 * @description 商品状态：STOCK：仓库中，SALE：销售中，SELL_OUT：售罄
 **/
goodsStatus?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 所属服务商ID
 * @format int64
 **/
partnerId?: number;
/**
 * @description 在售门店
 * @format int64
 **/
shopId?: number;
};
/**
 * @title GoodsPageVO
 **/
export type ZmsxGoodsComponentsSchemasGoodsPageVO = {
/**
 * @description 在售门店
 **/
applyShops: ZmsxGoodsComponentsSchemasApplyShops[];
/**
 * @description 虚拟卡商品SKU合集
 **/
cardSku: ZmsxGoodsComponentsSchemasCardSkuVO[];
/**
 * @description  卡类型：TIMES：次数卡，PERIOD：周期卡
 **/
cardType: string;
/**
 * @description 商品编码
 **/
code: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 卡卷类型：订购类型	月卡 MONTH
次卡 TIME
预约 ADVANCE
周卡 WEEK
优惠月卡 DISCOUNT_MONTH
优惠周卡 DISCOUNT_WEEK
优惠次卡 DISCOUNT_TIME
装修模式 DECORATION
配送模式 DELIVERY
 **/
goodsCardType: string;
/**
 * @description 商品id
 * @format int64
 **/
goodsId: number;
/**
 * @description 总库存
 * @format int32
 **/
inventory: number;
/**
 * @description 是否不限库存
 **/
inventoryUnlimited: boolean;
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 商品原价区间（最小值~最大值）
 **/
originalPrice: string;
/**
 * @description 商品价格区间（最小值~最大值）
 **/
price: string;
/**
 * @description 总销量
 * @format int32
 **/
sale: number;
/**
 * @description 在售门店
 **/
shopNames: string;
/**
 * @description 商品状态
 **/
status: string;
/**
 * @description 商品类型
 **/
type: string;
};
/**
 * @title GoodsReceiveDTO
 **/
export type ZmsxGoodsComponentsSchemasGoodsReceiveDTO = {
/**
 * @description 购买须知
 **/
buyNotice: string;
/**
 * @description 商品分类  FITNESS 健身 SWIM 游泳；YOGA 瑜伽；BADMINTON 羽毛球；BILLIARDS 台球；PING_PONG 乒乓球；BASKETBALL 篮球；FOOTBALL 足球；BOWLING 保龄球；TENNIS 网球；SQUASH 壁球；GOLF 高尔夫；STRIKE 武术搏击；KARATE 空手道；TAEKWONDO 跆拳道；MUAY_THAI 泰拳; WRESTLING 摔跤；BOXING 拳击； RACING_CAR 赛车；SPORT_CLIMBING 攀岩；SHOOTING 射击射箭；OTHER 其他
 **/
classify?: string;
/**
 * @description 成本价
 **/
costPrice: number;
/**
 * @description 有效期（为空则长期有效）
 * @format int32
 **/
effectiveDay?: number;
/**
 * @description 先享商品类型 ZERO 零元体验；WEEK 周卡；MONTH 月卡；TIMES 次卡
 **/
firstType: string;
/**
 * @description 库存
 * @format int32
 **/
inventory?: number;
/**
 * @description 不限库存标识
 **/
inventoryUnlimited?: boolean;
/**
 * @description 限购数量
 * @format int32
 **/
limitPerUser: number;
/**
 * @description 原价（划线价）
 **/
originalPrice?: number;
/**
 * @description 售价
 **/
price: number;
/**
 * @description 额度（可用次数/有效期天数）
 * @format int32
 **/
quota?: number;
/**
 * @description 零元商品ID自增 有则修改 无则新增
 * @format int64
 **/
receiveId?: number;
/**
 * @description 可用门店类型（PARTNER 服务商门店，PLATFORM 平台门店）
 **/
useShopType?: string;
};
/**
 * @title GoodsReceivePageVO
 **/
export type ZmsxGoodsComponentsSchemasGoodsReceivePageVO = {
/**
 * @description 商品编码
 **/
code: string;
/**
 * @description 成本价
 **/
costPrice: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @format int32
 **/
effectiveDay: number;
firstType: string;
/**
 * @description 商品id
 * @format int64
 **/
goodsId: number;
/**
 * @description 总库存
 * @format int32
 **/
inventory: number;
/**
 * @description 是否不限库存
 **/
inventoryUnlimited: boolean;
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 划线价
 **/
originalPrice: string;
/**
 * @description 商品价格
 **/
price: string;
/**
 * @description 总销量
 * @format int32
 **/
sale: number;
/**
 * @description 在售门店
 **/
shopNames: string;
/**
 * @description 商品状态
 **/
status: string;
/**
 * @description 可用门店类型（PARTNER 服务商门店，PLATFORM 平台门店）
 **/
useShopType: string;
};
/**
 * @title GoodsReceiveVO
 **/
export type ZmsxGoodsComponentsSchemasGoodsReceiveVO = {
/**
 * @description 购买须知
 **/
buyNotice: string;
/**
 * @description 商品分类 DELICACY 美食 AMUSE 休闲娱乐 FITNESS 运动健身 LIFE_SERVICE 生活服务 TOUR 旅游度假 PET 宠物 YOGA 瑜伽 MASSAGE 按摩足疗 MEDICAL_AESTHETICS 医学美容 HOME_DECORATION 家居装修 OTHER 其他
 **/
classify: string;
/**
 * @description 成本价
 **/
costPrice?: string;
/**
 * @description 有效期（为空则长期有效）
 * @format int32
 **/
effectiveDay?: number;
/**
 * @description 先享商品类型 ZERO 零元体验；
 **/
firstType: string;
/**
 * @description 库存
 * @format int32
 **/
inventory?: number;
/**
 * @description 不限库存标识
 **/
inventoryUnlimited?: boolean;
/**
 * @description 限购数量
 * @format int32
 **/
limitPerUser: number;
/**
 * @description 原价（划线价）
 **/
originalPrice?: string;
/**
 * @description 售价
 **/
price: string;
/**
 * @description 额度（可用次数）
 * @format int32
 **/
quota?: number;
/**
 * @description 零元商品ID自增 有则修改 无则新增
 * @format int64
 **/
receiveId?: number;
/**
 * @description 可用门店类型（PARTNER 服务商门店，PLATFORM 平台门店）
 **/
useShopType?: string;
};
/**
 * @title ItemVO
 **/
export type ZmsxGoodsComponentsSchemasItemVO = {
/**
 * @description 项目id
 * @format int64
 **/
itemId: number;
/**
 * @description 项目名称
 **/
itemName: string;
/**
 * @description 基础价格
 **/
price: string;
};
/**
 * @title RelationItemVO
 **/
export type ZmsxGoodsComponentsSchemasRelationItemVO = {
/**
 * @description 关联项目ID
 * @format int64
 **/
itemId: number;
/**
 * @description 项目名称
 **/
itemName: string;
};
/**
 * @title SaveGoodsDTO
 **/
export type ZmsxGoodsComponentsSchemasSaveGoodsDTO = {
/**
 * @description 适用门店
 **/
applyShops: ZmsxGoodsComponentsSchemasApplyShops[];
/**
 * @description 商品描述
 **/
description: string;
goodsCard?: ZmsxGoodsComponentsSchemasGoodsCardDTO;
/**
 * @description 商品封面图
 **/
goodsCover?: string;
goodsEquity?: ZmsxGoodsComponentsSchemasGoodsEquityDTO;
goodsReceive?: ZmsxGoodsComponentsSchemasGoodsReceiveDTO;
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 商品状态：STOCK：仓库中(下架)，SALE：销售中，SELL_OUT：售罄
 **/
status: string;
/**
 * @description 商品类型：CARD：电子卡券, EQUITY 权益卡券, RECEIVE 先享商品
 **/
type: string;
};
/**
 * @title SaveGoodsItemDTO
 **/
export type ZmsxGoodsComponentsSchemasSaveGoodsItemDTO = {
/**
 * @description 项目名称
 **/
name: string;
/**
 * @description 基础价格
 **/
price: number;
};
/**
 * @title SaveShopItemsDTO
 **/
export type ZmsxGoodsComponentsSchemasSaveShopItemsDTO = {
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
shopItems?: ZmsxGoodsComponentsSchemasShopItem[];
};
/**
 * @title SetSubsidyRuleDTO
 **/
export type ZmsxGoodsComponentsSchemasSetSubsidyRuleDTO = {
/**
 * @description 商品id
 * @format int64
 **/
goodsId: number;
/**
 * @description 补贴比例
 **/
subsidyRatio: number;
/**
 * @description 补贴方式 SUBSIDY_PRE 补贴前置；SUBSIDY_POST 补贴后置；SUBSIDY_ACTUAL_USE 实际使用
 **/
subsidyType: string;
};
/**
 * @title ShopDetail
 **/
export type ZmsxGoodsComponentsSchemasShopDetail = {
/**
 * @description 小程序id
 **/
appId: string;
/**
 * @description 距离-km
 * @format double
 **/
distance: number;
/**
 * @description 商户id
 * @format int64
 **/
merchantId: number;
/**
 * @description 门店id
 **/
shopId: string;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店名称
 **/
shopName: string;
};
/**
 * @title ShopItem
 **/
export type ZmsxGoodsComponentsSchemasShopItem = {
/**
 * @description 项目id
 * @format int64
 **/
itemId: number;
/**
 * @description 项目名称
 **/
itemName: string;
/**
 * @description 门店价格
 **/
price: number;
};
/**
 * @title ShopItemQueryDTO
 **/
export type ZmsxGoodsComponentsSchemasShopItemQueryDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 项目名称
 **/
name?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title ShopItemsVO
 **/
export type ZmsxGoodsComponentsSchemasShopItemsVO = {
/**
 * @description 是否选中
 **/
checked: boolean;
/**
 * @description 项目id
 * @format int64
 **/
itemId: number;
/**
 * @description 项目名称
 **/
itemName: string;
/**
 * @description 基础价格
 **/
price: string;
/**
 * @description 门店价格
 **/
shopPrice: string;
};
/**
 * @title StagePayInfoVO
 **/
export type ZmsxGoodsComponentsSchemasStagePayInfoVO = {
/**
 * @description 扣款金额
 **/
deductionAmount: string;
/**
 * @description 扣款期数
 **/
period: string;
/**
 * @description 扣款日期
 **/
stageDeductSpecifyDay: string;
};
/**
 * @title StagePayJsonVO
 **/
export type ZmsxGoodsComponentsSchemasStagePayJsonVO = {
/**
 * @description 支付金额
 **/
deductionAmount: number;
/**
 * @description 周期
 * @format int32
 **/
period: number;
/**
 * @description 扣款日期
 **/
stageDeductSpecifyDay: string;
};
/**
 * @title StagePayVO
 **/
export type ZmsxGoodsComponentsSchemasStagePayVO = {
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡
 **/
cardType: string;
/**
 * @description 期数
 * @format int32
 **/
stageNum: number;
/**
 * @description 扣款计划
 **/
stagePays: ZmsxGoodsComponentsSchemasStagePayInfoVO[];
};
/**
 * @title SubsidyRuleVO
 **/
export type ZmsxGoodsComponentsSchemasSubsidyRuleVO = {
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 补贴比例
 **/
subsidyRatio: string;
/**
 * @description 补贴方式 SUBSIDY_PRE 补贴前置；SUBSIDY_POST 补贴后置；SUBSIDY_ACTUAL_USE 实际使用
 **/
subsidyType: string;
};
/**
 * @title UpdateGoodsDTO
 **/
export type ZmsxGoodsComponentsSchemasUpdateGoodsDTO = {
/**
 * @description 适用门店
 **/
applyShops: ZmsxGoodsComponentsSchemasApplyShops[];
/**
 * @description 商品描述
 **/
description: string;
goodsCard?: ZmsxGoodsComponentsSchemasGoodsCardDTO;
/**
 * @description 商品封面图
 **/
goodsCover?: string;
goodsEquity?: ZmsxGoodsComponentsSchemasGoodsEquityDTO;
/**
 * @description 商品Id
 * @format int64
 **/
goodsId: number;
goodsReceive?: ZmsxGoodsComponentsSchemasGoodsReceiveDTO;
/**
 * @description 商品名称
 **/
name: string;
/**
 * @description 商品状态：STOCK：仓库中(下架)，SALE：销售中，SELL_OUT：售罄
 **/
status: string;
/**
 * @description 商品类型：CARD：电子卡券, EQUITY 权益卡券
 **/
type: string;
};
/**
 * @title UpdateGoodsItemDTO
 **/
export type ZmsxGoodsComponentsSchemasUpdateGoodsItemDTO = {
/**
 * @description 项目id
 * @format int64
 **/
id: number;
/**
 * @description 项目名称
 **/
name: string;
/**
 * @description 基础价格
 **/
price: number;
};
/**
 * @title UpdateSkuDTO
 **/
export type ZmsxGoodsComponentsSchemasUpdateSkuDTO = {
/**
 * @description 卡券 sku 信息合集
 **/
cardSkuInfos: ZmsxGoodsComponentsSchemasCardSkuInfoDTO[];
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
};
/**
 * @title UseScopeVO
 **/
export type ZmsxGoodsComponentsSchemasUseScopeVO = {
/**
 * @description 适用项目
 **/
itemNames: string;
/**
 * @description 适用门店
 **/
shopNames: string;
};
/**
 * @title PageVO«AppGoodsCardTypeVO»
 **/
export type ZmsxGoodsComponentsSchemasPageVO_AppGoodsCardTypeVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxGoodsComponentsSchemasAppGoodsCardTypeVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppGoodsEquityVO»
 **/
export type ZmsxGoodsComponentsSchemasPageVO_AppGoodsEquityVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxGoodsComponentsSchemasAppGoodsEquityVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppReceiveGoodsShopVO»
 **/
export type ZmsxGoodsComponentsSchemasPageVO_AppReceiveGoodsShopVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxGoodsComponentsSchemasAppReceiveGoodsShopVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«EquityPageVO»
 **/
export type ZmsxGoodsComponentsSchemasPageVO_EquityPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxGoodsComponentsSchemasEquityPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«GoodsEquityPageVO»
 **/
export type ZmsxGoodsComponentsSchemasPageVO_GoodsEquityPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxGoodsComponentsSchemasGoodsEquityPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«GoodsPageVO»
 **/
export type ZmsxGoodsComponentsSchemasPageVO_GoodsPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxGoodsComponentsSchemasGoodsPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«GoodsReceivePageVO»
 **/
export type ZmsxGoodsComponentsSchemasPageVO_GoodsReceivePageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxGoodsComponentsSchemasGoodsReceivePageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ItemVO»
 **/
export type ZmsxGoodsComponentsSchemasPageVO_ItemVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxGoodsComponentsSchemasItemVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«AppGoodsVO»
 **/
export type ZmsxGoodsComponentsSchemasResult_AppGoodsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasAppGoodsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppMerchantEquityItemsVO»
 **/
export type ZmsxGoodsComponentsSchemasResult_AppMerchantEquityItemsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasAppMerchantEquityItemsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppReceiveGoodsShopVO»
 **/
export type ZmsxGoodsComponentsSchemasResult_AppReceiveGoodsShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasAppReceiveGoodsShopVO;
msg: string;
success: boolean;
};
/**
 * @title Result«GoodsDetailVO»
 **/
export type ZmsxGoodsComponentsSchemasResult_GoodsDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasGoodsDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«List«AppGroupBuyOrderVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_List_AppGroupBuyOrderVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasAppGroupBuyOrderVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«AppGroupBuyVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_List_AppGroupBuyVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasAppGroupBuyVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«ItemVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_List_ItemVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasItemVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«ShopItemsVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_List_ShopItemsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasShopItemsVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«StagePayJsonVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_List_StagePayJsonVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasStagePayJsonVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppGoodsCardTypeVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_PageVO_AppGoodsCardTypeVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasPageVO_AppGoodsCardTypeVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppGoodsEquityVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_PageVO_AppGoodsEquityVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasPageVO_AppGoodsEquityVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppReceiveGoodsShopVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_PageVO_AppReceiveGoodsShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasPageVO_AppReceiveGoodsShopVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«EquityPageVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_PageVO_EquityPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasPageVO_EquityPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«GoodsEquityPageVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_PageVO_GoodsEquityPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasPageVO_GoodsEquityPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«GoodsPageVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_PageVO_GoodsPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasPageVO_GoodsPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«GoodsReceivePageVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_PageVO_GoodsReceivePageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasPageVO_GoodsReceivePageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ItemVO»»
 **/
export type ZmsxGoodsComponentsSchemasResult_PageVO_ItemVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasPageVO_ItemVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«StagePayVO»
 **/
export type ZmsxGoodsComponentsSchemasResult_StagePayVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasStagePayVO;
msg: string;
success: boolean;
};
/**
 * @title Result«UseScopeVO»
 **/
export type ZmsxGoodsComponentsSchemasResult_UseScopeVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxGoodsComponentsSchemasUseScopeVO;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxGoodsComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
export interface PathsZmsxGoods{'/goods/b/appM/goods/goodsItems': {post: {
param:{
/**
 * @description baseEntityIdDTO
 **/
body: ZmsxGoodsComponentsSchemasBaseEntityIdDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_AppMerchantEquityItemsVO_;
};
};
'/goods/b/goods/calculation': {post: {
param:{
/**
 * @description stagePayDTO
 **/
body: ZmsxGoodsComponentsSchemasCalculationStagePayDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_List_StagePayJsonVO_;
};
};
'/goods/b/goods/changeStatus': {put: {
param:{
/**
 * @description changeGoodsStatus
 **/
body: ZmsxGoodsComponentsSchemasChangeGoodsStatusDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/goods/copy': {post: {
param:{
/**
 * @description goodsIds
 **/
body: number[];
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/goods/deleted': {post: {
param:{
/**
 * @description goodsIds
 **/
body: number[];
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/goods/detail': {get: {
param:{query: {
/**
 * @description goodsId
 * @format int64
 **/
goodsId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_GoodsDetailVO_;
};
};
'/goods/b/goods/equityPage': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxGoodsComponentsSchemasEquityPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_EquityPageVO_;
};
};
'/goods/b/goods/export': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxGoodsComponentsSchemasGoodsPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_GoodsPageVO_;
};
};
'/goods/b/goods/goodsRelevance': {post: {
param:{
/**
 * @description applyShopsDTO
 **/
body: ZmsxGoodsComponentsSchemasApplyShopsDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/goods/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxGoodsComponentsSchemasGoodsPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_GoodsPageVO_;
};
};
'/goods/b/goods/save': {put: {
param:{
/**
 * @description goodsDTO
 **/
body: ZmsxGoodsComponentsSchemasSaveGoodsDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/goods/update': {put: {
param:{
/**
 * @description updateGoodsDTO
 **/
body: ZmsxGoodsComponentsSchemasUpdateGoodsDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/goods/update/sku': {put: {
param:{
/**
 * @description updateSkuDTO
 **/
body: ZmsxGoodsComponentsSchemasUpdateSkuDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/items/delete': {post: {
param:{
/**
 * @description baseEntityIdDTO
 **/
body: ZmsxGoodsComponentsSchemasBaseEntityIdDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/items/excel': {post: {
param:{
/**
 * @description file
 **/
body: string;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/items/list': {get: {
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_List_ItemVO_;
};
};
'/goods/b/items/list/shopItems': {post: {
param:{
/**
 * @description baseEntityIdDTO
 **/
body: ZmsxGoodsComponentsSchemasBaseEntityIdDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_List_ShopItemsVO_;
};
};
'/goods/b/items/page': {post: {
param:{
/**
 * @description shopItemQueryDTO
 **/
body: ZmsxGoodsComponentsSchemasShopItemQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_ItemVO_;
};
};
'/goods/b/items/save': {post: {
param:{
/**
 * @description createShopItemDTO
 **/
body: ZmsxGoodsComponentsSchemasSaveGoodsItemDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/items/saveShopItems': {post: {
param:{
/**
 * @description saveShopItemsDTO
 **/
body: ZmsxGoodsComponentsSchemasSaveShopItemsDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/b/items/update': {post: {
param:{
/**
 * @description updateGoodsItemDTO
 **/
body: ZmsxGoodsComponentsSchemasUpdateGoodsItemDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/c/app/goods/contributionPlan': {get: {
param:{query: {
/**
 * @description skuNo
 **/
skuNo: string;
};
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_StagePayVO_;
};
};
'/goods/c/app/goods/equityPage': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxGoodsComponentsSchemasAppGoodsEquityPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_AppGoodsEquityVO_;
};
};
'/goods/c/app/goods/goodsCardDetail': {get: {
param:{query: {
/**
 * @description goodsId
 * @format int64
 **/
goodsId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_AppGoodsVO_;
};
};
'/goods/c/app/goods/goodsCardType': {post: {
param:{
/**
 * @description goodsCardPageDTO
 **/
body: ZmsxGoodsComponentsSchemasGoodsCardPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_AppGoodsCardTypeVO_;
};
};
'/goods/c/app/goods/useScope': {post: {
param:{
/**
 * @description scopeDTO
 **/
body: ZmsxGoodsComponentsSchemasGetUseScopeDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_UseScopeVO_;
};
};
'/goods/c/partner/goods/receiveGoodsShopDetail': {get: {
param:{query: {
/**
 * @description goodsId
 * @format int64
 **/
goodsId: number;
/**
 * @description shopId
 **/
shopId: string;
};
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_AppReceiveGoodsShopVO_;
};
};
'/goods/c/partner/goods/receiveGoodsShopPage': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxGoodsComponentsSchemasAppReceiveGoodsPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_AppReceiveGoodsShopVO_;
};
};
'/goods/c/partner/shop/myGroupBuy': {get: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxGoodsComponentsSchemasAppGroupPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_List_AppGroupBuyVO_;
};
};
'/goods/c/partner/shop/myGroupBuyOrder': {get: {
param:{
/**
 * @description orderDTO
 **/
body: ZmsxGoodsComponentsSchemasAppGroupOrderDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_List_AppGroupBuyOrderVO_;
};
};
'/goods/console/goods/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxGoodsComponentsSchemasGoodsEquityPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_GoodsEquityPageVO_;
};
};
'/goods/console/goods/setSubsidyRule': {post: {
param:{
/**
 * @description subsidyRuleDTO
 **/
body: ZmsxGoodsComponentsSchemasSetSubsidyRuleDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/p/goods/changeInventory': {post: {
param:{
/**
 * @description inventoryDTO
 **/
body: ZmsxGoodsComponentsSchemasChangeInventoryDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/p/goods/changeStatus': {put: {
param:{
/**
 * @description changeGoodsStatus
 **/
body: ZmsxGoodsComponentsSchemasChangeGoodsStatusDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/p/goods/deleted': {post: {
param:{
/**
 * @description goodsIds
 **/
body: number[];
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/p/goods/detail': {get: {
param:{query: {
/**
 * @description goodsId
 * @format int64
 **/
goodsId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_GoodsDetailVO_;
};
};
'/goods/p/goods/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxGoodsComponentsSchemasGoodsPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_PageVO_GoodsReceivePageVO_;
};
};
'/goods/p/goods/save': {put: {
param:{
/**
 * @description goodsDTO
 **/
body: ZmsxGoodsComponentsSchemasSaveGoodsDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
'/goods/p/goods/update': {put: {
param:{
/**
 * @description updateGoodsDTO
 **/
body: ZmsxGoodsComponentsSchemasUpdateGoodsDTO;
}
/**
 * @description OK
 **/
response: ZmsxGoodsComponentsSchemasResult_Void_;
};
};
}

export interface PathsZmsxSms{}

/**
 * @title AbilityShopQueryDTO
 **/
export type ZmsxMerchantComponentsSchemasAbilityShopQueryDTO = {
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 开通类型： STAGE_PAY:阶段付 SAFETY_PAY:安心充
 **/
type: string;
};
/**
 * @title AbilityVO
 **/
export type ZmsxMerchantComponentsSchemasAbilityVO = {
/**
 * @description 业务能力code
 **/
code: string;
/**
 * @description 业务能力名称
 **/
desc: string;
/**
 * @description 业务能力是否开通
 **/
status: boolean;
};
/**
 * @title AppCourseSubPersonDTO
 **/
export type ZmsxMerchantComponentsSchemasAppCourseSubPersonDTO = {
/**
 * @description 核销码
 * @format int64
 **/
checkCode?: number;
/**
 * @description 课程id
 * @format int64
 **/
courseId: number;
/**
 * @description 用户id
 * @format int64
 **/
userId?: number;
};
/**
 * @title AppCourseSubscribeDetailVO
 **/
export type ZmsxMerchantComponentsSchemasAppCourseSubscribeDetailVO = {
/**
 * @description 可预约状态 NUMBER:人数已满, CLOSED:课程已结束,OK:可预约,ALREADY:已预约
 **/
canSubscribeStatus: string;
/**
 * @description 核销码
 **/
checkCode: string;
/**
 * @description 核销状态
 **/
codeStatus: boolean;
/**
 * @description 课程ID
 * @format int64
 **/
courseId: number;
/**
 * @description 课程介绍
 **/
courseIntro: string;
/**
 * @description 课程难度 难度级别：ENTRY:入门, BASE:基础,INTENSIFY:强化,ADVANCEMENT:进阶
 **/
courseLevel: string;
/**
 * @description 课程状态
 **/
courseStatus: string;
/**
 * @description 开课日期
 **/
courseTime: string;
/**
 * @description 员工名称
 **/
employeeName: string;
/**
 * @description 员工照片
 **/
employeePhoto: string;
/**
 * @description 课程开始时间
 **/
endTime: string;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 课程名称
 **/
name: string;
/**
 * @description 开课人数要求-最小
 * @format int32
 **/
numberLimit: number;
/**
 * @description 开课人数要求-最大
 * @format int32
 **/
numberMax: number;
/**
 * @description 开课要求:开课人数类型：REGULAR：固定；RANGE:范围;
 **/
numberType: string;
/**
 * @description 操作状态 CANNOT:无法操作  SUBSCRIBE:可预约  CANCEL:可取消
 **/
operation: string;
/**
 * @description 开课地点
 **/
place: string;
/**
 * @description 店铺logo
 **/
shopLogo: string;
/**
 * @description 开课门店
 **/
shopName: string;
/**
 * @description 门店简称
 **/
shortName: string;
/**
 * @description 课程开始时间
 **/
startTime: string;
/**
 * @description 预约编号
 **/
subscribeCode: string;
/**
 * @description 预约人数
 * @format int32
 **/
subscribeNumber: number;
/**
 * @description 预约状态  WAIT:待上课,COMPLETED:已完成,BREAK:未完成,CANCEL:已取消;
 **/
subscribeStatus: string;
};
/**
 * @title AppCourseSubscribePageDTO
 **/
export type ZmsxMerchantComponentsSchemasAppCourseSubscribePageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 课程id
 * @format int64
 **/
courseId?: number;
/**
 * @description 课程时间
 **/
courseTime?: string;
/**
 * @description 员工id
 * @format int64
 **/
empId?: number;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 预约状态 WAIT:待上课,COMPLETED:已完成,BREAK:已爽约,CANCEL:已取消;
 **/
subStatus?: string;
/**
 * @description 上下午标识  am:上午;  pm:下午
 **/
timeFlag?: string;
/**
 * @description 用户id
 * @format int64
 **/
userId?: number;
};
/**
 * @title AppLoginEmployeesVO
 **/
export type ZmsxMerchantComponentsSchemasAppLoginEmployeesVO = {
/**
 * @description 账号类型：MERCHANT 商户主账号；BUSINESS 运营；FINANCE 财务；AREA_SHOP_MANAGE 区域店长；SHOP_MANAGE 店长；EMPLOYEE 门店员工
 **/
accountType: string;
/**
 * @description 是不是管理员,true: 是，false: 不是
 **/
adminFlag: boolean;
/**
 * @description 员工功能权限
 **/
allowAppletFunctionList: string[];
/**
 * @description 员工店铺ID权限
 **/
allowShopIdList: number[];
/**
 * @description 员工ID
 * @format int64
 **/
empId: number;
/**
 * @description 员工编码
 **/
empNo: string;
/**
 * @description 员工简介
 **/
intro: string;
/**
 * @description 员工名称
 **/
name: string;
/**
 * @description 职业
 **/
occupation: string;
/**
 * @description 员工手机号
 **/
phone: string;
/**
 * @description 员工头像
 **/
photo: string;
resetPassword: boolean;
sex: string;
};
/**
 * @title AppMShopBalanceFlowQueryDTO
 **/
export type ZmsxMerchantComponentsSchemasAppMShopBalanceFlowQueryDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 流水类型 INFLOW:流入 OUTFLOW：流出  不传就是全部
 **/
flowType?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title AppMerchantCourseVO
 **/
export type ZmsxMerchantComponentsSchemasAppMerchantCourseVO = {
/**
 * @description 课程id
 * @format int64
 **/
courseId: number;
/**
 * @description 课程难度 难度级别：ENTRY:入门, BASE:基础,INTENSIFY:强化,ADVANCEMENT:进阶
 **/
courseLevel: string;
/**
 * @description 课程状态 WAIT:待开始;  BEING:进行中;    CLOSED:已结束;
 **/
courseStatus: string;
/**
 * @description 开课日期
 **/
courseTime: string;
/**
 * @description 课程开始时间
 **/
endTime: string;
/**
 * @description 课程名称
 **/
name: string;
/**
 * @description 开课人数要求
 * @format int32
 **/
numberLimit: number;
/**
 * @description 预约人列表
 **/
personVOS: ZmsxMerchantComponentsSchemasAppMerchantSubCoursePersonVO[];
/**
 * @description 开课地点
 **/
place: string;
/**
 * @description 开课门店
 **/
shopName: string;
/**
 * @description 课程开始时间
 **/
startTime: string;
/**
 * @description 预约人数
 * @format int32
 **/
subscribeNumber: number;
};
/**
 * @title AppMerchantSubCoursePageDTO
 **/
export type ZmsxMerchantComponentsSchemasAppMerchantSubCoursePageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 课程状态
 **/
courseStatus?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title AppMerchantSubCoursePersonVO
 **/
export type ZmsxMerchantComponentsSchemasAppMerchantSubCoursePersonVO = {
/**
 * @description 课程id
 * @format int64
 **/
courseId: number;
/**
 * @description 预约人昵称
 **/
subscribePersonNickName: string;
/**
 * @description 预约人电话
 **/
subscribePersonTel: string;
};
/**
 * @title AppMerchantTeacherVO
 **/
export type ZmsxMerchantComponentsSchemasAppMerchantTeacherVO = {
/**
 * @description 关联门店员工
 * @format int64
 **/
empId: number;
/**
 * @description 介绍信息
 **/
introduction: string;
/**
 * @description 照片合集
 **/
photos: ZmsxMerchantComponentsSchemasTeacherPhotosVO[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
/**
 * @description 教师表主键
 * @format int64
 **/
teacherId: number;
/**
 * @description 教师名称
 **/
teacherName: string;
/**
 * @description 教师头像
 **/
teacherPhoto: string;
};
/**
 * @title AppPartnerUnifyShopPageVO
 **/
export type ZmsxMerchantComponentsSchemasAppPartnerUnifyShopPageVO = {
/**
 * @description 详细地址
 **/
address: string;
/**
 * @description 门店分类 YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory: string;
/**
 * @description 店铺logo
 **/
shopLogo: string;
/**
 * @description 营业执照店铺名称
 **/
shopName: string;
/**
 * @description 统一门店主键ID
 * @format int64
 **/
unifyId: number;
};
/**
 * @title AppSafetyShopDetailQueryDTO
 **/
export type ZmsxMerchantComponentsSchemasAppSafetyShopDetailQueryDTO = {
/**
 * @description 维度
 * @format double
 **/
latitude?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
};
/**
 * @title AppSafetyShopDetailVO
 **/
export type ZmsxMerchantComponentsSchemasAppSafetyShopDetailVO = {
/**
 * @description 门店地址
 **/
address: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 距离-km
 * @format double
 **/
distance: number;
/**
 * @description 支持项目列表
 **/
items: string[];
/**
 * @description 维度
 * @format double
 **/
latitude: number;
/**
 * @description 经度
 * @format double
 **/
longitude: number;
/**
 * @description 门店id
 * @format int64
 **/
merchantId: number;
/**
 * @description 联系电话
 **/
phone: string;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 门店分类 YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory: string;
/**
 * @description 门头照
 **/
shopCovers: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 同一商户下的安心充门店数量
 * @format int32
 **/
shopNumber: number;
};
/**
 * @title AppSafetyShopPageVO
 **/
export type ZmsxMerchantComponentsSchemasAppSafetyShopPageVO = {
/**
 * @description 门店地址
 **/
address: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 距离-km
 * @format double
 **/
distance: number;
/**
 * @description 支持项目列表
 **/
items: string[];
/**
 * @description 维度
 * @format double
 **/
latitude: number;
/**
 * @description 经度
 * @format double
 **/
longitude: number;
/**
 * @description 商户id
 * @format int64
 **/
merchantId: number;
/**
 * @description 联系电话
 **/
phone: string;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 门店分类 YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory: string;
/**
 * @description 门头照
 **/
shopCovers: string;
/**
 * @description 门店id
 **/
shopId: string;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 同一商户下的安心充门店数量
 * @format int32
 **/
shopNumber: number;
/**
 * @description 门店标签列表
 **/
shopTags: string[];
};
/**
 * @title AppShopExamplesVO
 **/
export type ZmsxMerchantComponentsSchemasAppShopExamplesVO = {
/**
 * @description 作者
 **/
authorName: string;
/**
 * @description 封面图
 **/
caseCover: string;
/**
 * @description 案例简介
 **/
caseIntro: string;
/**
 * @description 案例日期
 **/
caseTime: string;
/**
 * @description 案例ID
 * @format int64
 **/
id: number;
};
/**
 * @title AppShopIntroduceDetailsVO
 **/
export type ZmsxMerchantComponentsSchemasAppShopIntroduceDetailsVO = {
/**
 * @description 面积（999㎡）
 **/
acreage: string;
/**
 * @description 设施ICON列表
 **/
facilityIcons: ZmsxMerchantComponentsSchemasShopIconsVO[];
/**
 * @description 店铺介绍
 **/
introduce: string;
/**
 * @description 店铺相册列表
 **/
photos: ZmsxMerchantComponentsSchemasShopPhotosVO[];
/**
 * @description 服务ICON列表
 **/
serviceIcons: ZmsxMerchantComponentsSchemasShopIconsVO[];
/**
 * @description 场馆介绍封面图
 **/
shopCover: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title AppShopRedpkgDetailVO
 **/
export type ZmsxMerchantComponentsSchemasAppShopRedpkgDetailVO = {
/**
 * @description 红包列表
 **/
redPkgVos: ZmsxMerchantComponentsSchemasRedpkgVO[];
shopDetailVO: ZmsxMerchantComponentsSchemasShopDetailVO;
};
/**
 * @title AppShopRedpkgVO
 **/
export type ZmsxMerchantComponentsSchemasAppShopRedpkgVO = {
/**
 * @description 距离
 * @format double
 **/
distance: number;
/**
 * @description 门店logo
 **/
logo: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 红包总金额
 * @format double
 **/
totalAmount: number;
/**
 * @description 统一门店id
 * @format int64
 **/
unifyShopId: number;
};
/**
 * @title AppShopVO
 **/
export type ZmsxMerchantComponentsSchemasAppShopVO = {
/**
 * @description 详细地址
 **/
address: string;
/**
 * @description 市
 **/
city: string;
/**
 * @description 市编码
 **/
cityCode: string;
/**
 * @description 客服名称
 **/
customerServiceName: string;
/**
 * @description 客服电话
 **/
customerServiceTel: string;
/**
 * @description 距离
 **/
distance: string;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 商户简称
 **/
merchantShortName: string;
/**
 * @description 连锁门店id
 * @format int64
 **/
multipleShopId: number;
/**
 * @description 连锁门店类型  ALONE:单店; CHAIN:连锁门店;
 **/
multipleShopType: string;
/**
 * @description 省份名称
 **/
province: string;
/**
 * @description 省份编码
 **/
provinceCode: string;
/**
 * @description 门店ID
 * @format int64
 **/
shopId: number;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店全称
 **/
shopName: string;
/**
 * @description 门店简称
 **/
shopShortName: string;
};
/**
 * @title AppStagePayShopVO
 **/
export type ZmsxMerchantComponentsSchemasAppStagePayShopVO = {
/**
 * @description 已开通业务能力 STAGE_PAY
 **/
ability: string[];
/**
 * @description 门店地址
 **/
address: string;
/**
 * @description 小程序id
 **/
appId: string;
/**
 * @description 距离-km
 * @format double
 **/
distance: number;
/**
 * @description 商户id
 * @format int64
 **/
merchantId: number;
/**
 * @description 门店分类 YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店名称
 **/
shopName: string;
};
/**
 * @title AppTeacherVO
 **/
export type ZmsxMerchantComponentsSchemasAppTeacherVO = {
/**
 * @description 员工id
 * @format int64
 **/
empId: number;
/**
 * @description 介绍信息
 **/
introduction: string;
/**
 * @description 照片合集
 **/
photos: ZmsxMerchantComponentsSchemasTeacherPhotosVO[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
/**
 * @description 教师表主键
 * @format int64
 **/
teacherId: number;
/**
 * @description 教师名称
 **/
teacherName: string;
/**
 * @description 教师头像
 **/
teacherPhoto: string;
};
/**
 * @title AppTemplateVO
 **/
export type ZmsxMerchantComponentsSchemasAppTemplateVO = {
/**
 * @description 小程序模板ID（支付宝）
 **/
appletTemplateId: string;
/**
 * @description 小程序模板表ID
 * @format int64
 **/
templateId: number;
/**
 * @description 模板名称
 **/
templateName: string;
/**
 * @description 当前模板关联组件列表
 **/
templateWidgets: {[x: string | number]: ZmsxMerchantComponentsSchemasWidgetVO;
};
};
/**
 * @title AppletTemplateVO
 **/
export type ZmsxMerchantComponentsSchemasAppletTemplateVO = {
/**
 * @description 小程序模板ID（支付宝）
 **/
appletTemplateId: string;
/**
 * @description 小程序模板表ID
 * @format int64
 **/
templateId: number;
/**
 * @description 模板名称
 **/
templateName: string;
/**
 * @description 当前模板关联组件列表
 **/
templateWidgets: ZmsxMerchantComponentsSchemasWidgetVO[];
};
/**
 * @title AppletTemplateWidgetDTO
 **/
export type ZmsxMerchantComponentsSchemasAppletTemplateWidgetDTO = {
/**
 * @description 是否隐藏
 **/
hide?: boolean;
/**
 * @description 店铺id
 * @format int64
 **/
shopId?: number;
/**
 * @description 组件内容
 **/
widgetContent?: string;
/**
 * @description 组件英文名
 **/
widgetEnName?: string;
/**
 * @description 组件ID
 * @format int64
 **/
widgetId?: number;
widgetName: string;
};
/**
 * @title AuditMerchantDTO
 **/
export type ZmsxMerchantComponentsSchemasAuditMerchantDTO = {
/**
 * @description 审核意见
 **/
auditMsg: string;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 是否通过 true 审核通过；false 审核驳回
 **/
pass: boolean;
};
/**
 * @title BaseEntityIdDTO
 **/
export type ZmsxMerchantComponentsSchemasBaseEntityIdDTO = {
/**
 * @description 主键id
 * @format int64
 **/
id: number;
};
/**
 * @title ChainMerchantShopDTO
 **/
export type ZmsxMerchantComponentsSchemasChainMerchantShopDTO = {
/**
 * @description 详细地址
 **/
address: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 经度
 * @format double
 **/
latitude: number;
/**
 * @description 纬度
 * @format double
 **/
longitude: number;
/**
 * @description 商户Id
 * @format int64
 **/
merchantId: number;
/**
 * @description 连锁门店id 在第一家连锁门店审核通过之后  新增该门店的连锁门店  传递该门店id
 * @format int64
 **/
multipleShopId: number;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 门店id 编辑时传递要编辑的门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 商户logo
 **/
shopLogo: string;
/**
 * @description 门店全称
 **/
shopName: string;
/**
 * @description 门店全称名称
 **/
shortName: string;
};
/**
 * @title ChainMerchantShopVO
 **/
export type ZmsxMerchantComponentsSchemasChainMerchantShopVO = {
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 门店创建时间
 **/
createTime: string;
/**
 * @description 连锁门店标志
 **/
multipleShopFlag: boolean;
/**
 * @description 连锁门店id
 * @format int64
 **/
multipleShopId: number;
/**
 * @description 连锁门店类型  CHAIN：连锁  ALONE:单店
 **/
multipleShopType: string;
/**
 * @description 开通进度
 **/
openOverview: string;
/**
 * @description 业主方结算： true:已启用；false:未启用；null:未配置
 **/
settledEnable: boolean;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 商户logo
 **/
shopLogo: string;
/**
 * @description 门店全称名称
 **/
shopName: string;
/**
 * @description 门店编号
 **/
shopNo: string;
};
/**
 * @title ChangeEmployeeEnableDTO
 **/
export type ZmsxMerchantComponentsSchemasChangeEmployeeEnableDTO = {
/**
 * @description 员工ID
 * @format int64
 **/
empId: number;
/**
 * @description 启用状态 1 启用；0 未启用
 * @format int32
 **/
enable?: number;
};
/**
 * @title ChangeEnableStatusDTO
 **/
export type ZmsxMerchantComponentsSchemasChangeEnableStatusDTO = {
/**
 * @description 状态 true 可用；false 停用
 **/
enable: boolean;
/**
 * @description 模板id
 * @format int64
 **/
templateId: number;
};
/**
 * @title ChangeMerchantEnableDTO
 **/
export type ZmsxMerchantComponentsSchemasChangeMerchantEnableDTO = {
/**
 * @description 启用状态 1 启用；0 未启用
 * @format int32
 **/
enable: number;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
};
/**
 * @title ChangeShopEnableDTO
 **/
export type ZmsxMerchantComponentsSchemasChangeShopEnableDTO = {
/**
 * @description 启用状态 0 未启用；1 启用
 * @format int32
 **/
enable: number;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title ChangeShopShowStatusDTO
 **/
export type ZmsxMerchantComponentsSchemasChangeShopShowStatusDTO = {
/**
 * @description 门店ids
 **/
shopIds: number[];
/**
 * @description 显示状态 true:显示；false：隐藏
 **/
showStatus: boolean;
};
/**
 * @title CityTreeVO
 **/
export type ZmsxMerchantComponentsSchemasCityTreeVO = {child: ZmsxMerchantComponentsSchemasCityTreeVO[];
code: string;
/**
 * @format int32
 **/
level: number;
name: string;
};
/**
 * @title CityVO
 **/
export type ZmsxMerchantComponentsSchemasCityVO = {
/**
 * @format int32
 **/
code: number;
name: string;
};
/**
 * @title ConsoleMerchantShopVO
 **/
export type ZmsxMerchantComponentsSchemasConsoleMerchantShopVO = {
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店全称
 **/
shopName: string;
/**
 * @description 门店简称
 **/
shortName: string;
};
/**
 * @title ConsoleMerchantVO
 **/
export type ZmsxMerchantComponentsSchemasConsoleMerchantVO = {
/**
 * @description 申请时间
 **/
applicationTime: string;
/**
 * @description 审核结果消息
 **/
auditMsg: string;
/**
 * @description 审核状态：0审核中；1已通过；2已驳回
 * @format int32
 **/
auditStatus: number;
/**
 * @description 是否启用 0 不启用；1启用
 * @format int32
 **/
enable: number;
/**
 * @description 入驻时间
 **/
entryTime: string;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 商户号
 **/
merchantNo: string;
/**
 * @description 关联服务商
 **/
partnerName: string;
};
/**
 * @title ConsoleSafetyShopPageVO
 **/
export type ZmsxMerchantComponentsSchemasConsoleSafetyShopPageVO = {
/**
 * @description 已开通服务：STAGE_PAY:阶段付,SAFETY_PAY:安心充
 **/
abilities: string[];
ability: string;
/**
 * @description 门店创建时间
 * @format date-time
 **/
createTime: string;
/**
 * @description 所属商户
 **/
merchantName: string;
/**
 * @description 关联服务商
 **/
partnerName: string;
/**
 * @description 店铺id
 **/
shopId: string;
/**
 * @description 店铺名称
 **/
shopName: string;
/**
 * @description 店铺编码
 **/
shopNo: string;
/**
 * @description 显示状态
 **/
showStatus: boolean;
subsidyRuleVO: ZmsxMerchantComponentsSchemasSubsidyRuleVO;
};
/**
 * @title ConsoleStagePayShopPageVO
 **/
export type ZmsxMerchantComponentsSchemasConsoleStagePayShopPageVO = {
/**
 * @description 已开通服务：STAGE_PAY:阶段付,SAFETY_PAY:安心充
 **/
abilities: string[];
ability: string;
/**
 * @description 企业支付宝账号
 **/
alipayAccount: string;
/**
 * @description 小程序
 **/
appName: string;
/**
 * @description 能否发放奖励金
 **/
canSend: boolean;
/**
 * @description 门店创建时间
 * @format date-time
 **/
createTime: string;
/**
 * @description 进件状态
 **/
entryStatus: boolean;
/**
 * @description 所属商户
 **/
merchantName: string;
/**
 * @description 连锁门店id
 **/
multipleShopId: string;
/**
 * @description 主店名称
 **/
multipleShopName: string;
/**
 * @description 门店类型
 **/
multipleShopType: string;
/**
 * @description 门店类型-str
 **/
multipleShopTypeStr: string;
/**
 * @description 关联服务商
 **/
partnerName: string;
/**
 * @description 奖励金金额
 * @format double
 **/
rewards: number;
/**
 * @description 发放记录id
 * @format int64
 **/
rewardsSendRecordId: number;
/**
 * @description 发放状态
 **/
sendStatus: boolean;
/**
 * @description 结算方式 ,可选值有 bankCard: 银行卡，alipayAccount: 支付宝账号
 **/
settleType: string;
/**
 * @description 店铺id
 * @format int64
 **/
shopId: number;
/**
 * @description 店铺名称
 **/
shopName: string;
/**
 * @description 店铺编码
 **/
shopNo: string;
};
/**
 * @title ContinueCreateDTO
 **/
export type ZmsxMerchantComponentsSchemasContinueCreateDTO = {appStatus: string;
/**
 * @format int64
 **/
appletId: number;
};
/**
 * @title CourseLimitNumberDTO
 **/
export type ZmsxMerchantComponentsSchemasCourseLimitNumberDTO = {
/**
 * @description 限制数量
 * @format int32
 **/
limitNumber: number;
};
/**
 * @title CourseSubPersonDetailVO
 **/
export type ZmsxMerchantComponentsSchemasCourseSubPersonDetailVO = {
/**
 * @description 课程介绍
 **/
courseIntro: string;
/**
 * @description 课程难度 难度级别：ENTRY:入门, BASE:基础,INTENSIFY:强化,ADVANCEMENT:进阶
 **/
courseLevel: string;
/**
 * @description 员工名称
 **/
employeeName: string;
/**
 * @description 预约ID
 * @format int64
 **/
id: number;
/**
 * @description 课程名称
 **/
name: string;
/**
 * @description 开课人数要求
 * @format int32
 **/
numberLimit: number;
/**
 * @description 开课地点
 **/
place: string;
/**
 * @description 开课门店
 **/
shopName: string;
/**
 * @description 预约编号
 **/
subscribeCode: string;
/**
 * @description 预约人昵称
 **/
subscribePersonNickName: string;
/**
 * @description 预约人电话
 **/
subscribePersonTel: string;
/**
 * @description 预约状态  WAIT:待上课,COMPLETED:已完成,BREAK:已爽约,CANCEL:已取消;
 **/
subscribeStatus: string;
/**
 * @description 预约时间
 **/
subscribeTime: string;
};
/**
 * @title CourseSubPersonPageDTO
 **/
export type ZmsxMerchantComponentsSchemasCourseSubPersonPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 预约时间范围查询-结束时间
 **/
courseTimeEnd?: string;
/**
 * @description 预约时间范围查询-起始时间
 **/
courseTimeStart?: string;
/**
 * @description 商户id
 * @format int64
 **/
merchantId?: number;
/**
 * @description 课程名称
 **/
name?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 店铺id
 * @format int64
 **/
shopId?: number;
/**
 * @description 开课门店
 **/
shopName?: string;
/**
 * @description 门店简称
 **/
shortName?: string;
/**
 * @description 预约编号
 **/
subscribeCode?: string;
/**
 * @description 预约用户状态
 **/
subscribeStatus?: string;
/**
 * @description 预约用户电话
 **/
telephone?: string;
};
/**
 * @title CourseSubscribeDetailVO
 **/
export type ZmsxMerchantComponentsSchemasCourseSubscribeDetailVO = {
/**
 * @description 课程编号
 **/
courseCode: string;
/**
 * @description 课程介绍
 **/
courseIntro: string;
/**
 * @description 课程难度 难度级别：ENTRY:入门, BASE:基础,INTENSIFY:强化,ADVANCEMENT:进阶
 **/
courseLevel: string;
/**
 * @description 课程状态 课程状态 WAIT:待开始;  BEING:进行中; CLOSED:已结束;
 **/
courseStatus: string;
/**
 * @description 开课时间
 **/
courseTime: string;
/**
 * @description 员工id
 **/
employeeId: string;
/**
 * @description 员工名称
 **/
employeeName: string;
/**
 * @description 员工照片
 **/
employeePhoto: string;
/**
 * @description 课程结束时间
 **/
endTime: string;
/**
 * @description 课程ID
 * @format int64
 **/
id: number;
isLimitTime: boolean;
/**
 * @description 预约时间限制
 * @format int32
 **/
limitTime: number;
/**
 * @description 课程名称
 **/
name: string;
/**
 * @description 开课人数要求-最小
 * @format int32
 **/
numberLimit: number;
/**
 * @description 开课人数要求-最大
 * @format int32
 **/
numberMax: number;
/**
 * @description 开课要求:开课人数类型：REGULAR：固定；RANGE:范围;
 **/
numberType: string;
/**
 * @description 开课地点
 **/
place: string;
/**
 * @description 开课门店
 **/
shopName: string;
/**
 * @description 课程开始时间
 **/
startTime: string;
/**
 * @description 预约人数
 **/
subscribeNumber: string;
};
/**
 * @title CourseSubscribePageDTO
 **/
export type ZmsxMerchantComponentsSchemasCourseSubscribePageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 课程状态 WAIT:待开始;  BEING:进行中;    CLOSED:已结束; CANCEL:已失效
 **/
courseStatus?: string;
/**
 * @description 商户id
 * @format int64
 **/
merchantId?: number;
/**
 * @description 课程名称
 **/
name?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 店铺id
 * @format int64
 **/
shopId?: number;
/**
 * @description 开课门店
 **/
shortName?: string;
};
/**
 * @title CreateCourseSubscribeDTO
 **/
export type ZmsxMerchantComponentsSchemasCreateCourseSubscribeDTO = {
/**
 * @description 课程间隔
 * @format int32
 **/
breakTime: number;
/**
 * @description 课程介绍
 **/
courseIntro?: string;
/**
 * @description 课程难度 难度级别：ENTRY:入门, BASE:基础,INTENSIFY:强化,ADVANCEMENT:进阶
 **/
courseLevel: string;
/**
 * @description 开课时间
 **/
courseTime: string;
/**
 * @description 员工id
 **/
employeeId?: string;
/**
 * @description 课程结束时间
 **/
endTime: string;
isLimitTime?: boolean;
/**
 * @description 预约时间限制
 * @format int32
 **/
limitTime?: number;
/**
 * @description 课程名称
 **/
name: string;
/**
 * @description 开课人数要求-最小
 * @format int32
 **/
numberLimit: number;
/**
 * @description 开课最大人数
 * @format int32
 **/
numberMax: number;
/**
 * @description 开课要求:开课人数类型：REGULAR：固定；RANGE:范围;
 **/
numberType: string;
/**
 * @description 课程时长
 * @format int32
 **/
period: number;
/**
 * @description 开课地点
 **/
place?: string;
/**
 * @description 商铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 课程开始时间
 **/
startTime: string;
/**
 * @description 课程节数
 * @format int32
 **/
times: number;
};
/**
 * @title CreateMerchantDTO
 **/
export type ZmsxMerchantComponentsSchemasCreateMerchantDTO = {
/**
 * @description 企业支付宝账号
 **/
alipayAccount: string;
/**
 * @description 银行卡卡号
 **/
bankAccount: string;
/**
 * @description 开户行支行
 **/
bankBranchName: string;
/**
 * @description 银行卡开户名
 **/
bankCardName: string;
/**
 * @description 开户行
 **/
bankName: string;
/**
 * @description 经营类目
 **/
category: string;
/**
 * @description 经营类目经营类目描述
 **/
categoryDesc: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 登录名,为空不填默认为手机号
 **/
loginName: string;
/**
 * @description 商户营业执照编码
 **/
merchantLicenseNo: string;
/**
 * @description 商户营业执照
 **/
merchantLicensePic: string;
/**
 * @description 商户logo
 **/
merchantLogo: string;
/**
 * @description 商户全称名称
 **/
merchantName: string;
/**
 * @description 服务商类型 0 企业；1 个体工商户
 * @format int32
 **/
merchantType: number;
/**
 * @description 默认密码
 **/
password: string;
/**
 * @description 是否是对公账户
 * @format int32
 **/
pubAccount: number;
/**
 * @description 商户简称
 **/
shortName: string;
};
/**
 * @title CreateMerchantShopDTO
 **/
export type ZmsxMerchantComponentsSchemasCreateMerchantShopDTO = {
/**
 * @description 详细地址
 **/
address: string;
/**
 * @description 企业支付宝账号
 **/
alipayAccount: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 经营类目
 **/
category: string;
/**
 * @description 经营描述名称
 **/
categoryDesc: string;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 联系人邮箱
 **/
contactEmail: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 内景照
 **/
interiorPhotos: string[];
/**
 * @description 经度
 * @format double
 **/
latitude: number;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 纬度
 * @format double
 **/
longitude: number;
/**
 * @description 商户Id
 * @format int64
 **/
merchantId: number;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 结算账号
 **/
settleAccount: string;
/**
 * @description 结算账户名称
 **/
settleAccountName: string;
/**
 * @description 结算方式, 支付宝: alipayAccount,  银行卡: bankCard; 目前仅支持支付宝
 **/
settleType: string;
/**
 * @description 门店分类： YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory: string;
/**
 * @description 门头照
 **/
shopCovers: string[];
/**
 * @description 营业执照企业名称
 **/
shopLicenseName: string;
/**
 * @description 门店营业执照编码
 **/
shopLicenseNo: string;
/**
 * @description 门店营业执照
 **/
shopLicensePic: string;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店全称名称
 **/
shopName: string;
/**
 * @description 门店经营类型, DS: 直营，FS: 加盟
 **/
shopOperateType: string;
/**
 * @description 服务商类型 0 企业；1 个体工商户
 * @format int32
 **/
shopType: number;
/**
 * @description 门店简称
 **/
shortName: string;
};
/**
 * @title CreateShopExamplesDTO
 **/
export type ZmsxMerchantComponentsSchemasCreateShopExamplesDTO = {
/**
 * @description 作者
 **/
authorName: string;
/**
 * @description 封面图
 **/
caseCover: string;
/**
 * @description 案例简介
 **/
caseIntro: string;
/**
 * @description 请填写案例日期
 **/
caseTime: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 案例标题
 **/
title: string;
};
/**
 * @title CustomerServiceDTO
 **/
export type ZmsxMerchantComponentsSchemasCustomerServiceDTO = {
/**
 * @description 客服名称
 **/
customerServiceName: string;
/**
 * @description 客服电话
 **/
customerServiceTel: string;
/**
 * @description 店铺id
 * @format int64
 **/
shopId: number;
};
/**
 * @title CustomerServicePageDTO
 **/
export type ZmsxMerchantComponentsSchemasCustomerServicePageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title CustomerServiceVO
 **/
export type ZmsxMerchantComponentsSchemasCustomerServiceVO = {
/**
 * @description 客服名称
 **/
customerServiceName: string;
/**
 * @description 客服电话
 **/
customerServiceTel: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 开课地址
 **/
shopName: string;
/**
 * @description 修改时间
 **/
updateTime: string;
};
/**
 * @title EmpShopInfoVO
 **/
export type ZmsxMerchantComponentsSchemasEmpShopInfoVO = {
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 店铺名称
 **/
shopName: string;
};
/**
 * @title EmployeeDetailVO
 **/
export type ZmsxMerchantComponentsSchemasEmployeeDetailVO = {
/**
 * @description 员工ID 有则修改 无则新增
 * @format int64
 **/
empId: number;
/**
 * @description 员工简介
 **/
intro?: string;
/**
 * @description 员工名称
 **/
name: string;
/**
 * @description 职业
 **/
occupation: string;
/**
 * @description 员工手机号
 **/
phone: string;
/**
 * @description 员工头像
 **/
photo: string;
/**
 * @description 角色列表
 **/
roleList?: string[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
/**
 * @description 关联店铺
 **/
shops: ZmsxMerchantComponentsSchemasShopVO[];
};
/**
 * @title EmployeesDTO
 **/
export type ZmsxMerchantComponentsSchemasEmployeesDTO = {
/**
 * @description 员工ID 有则修改 无则新增
 * @format int64
 **/
empId: number;
/**
 * @description 员工简介
 **/
intro?: string;
/**
 * @description 员工名称
 **/
name: string;
/**
 * @description 登录密码
 **/
password: string;
/**
 * @description 员工手机号
 **/
phone: string;
/**
 * @description 员工头像
 **/
photo: string;
/**
 * @description 员工角色,使用roleNo的数组集合，不要用roleId
 **/
roleList: string[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
/**
 * @description 关联店铺
 **/
shops: ZmsxMerchantComponentsSchemasShopDTO[];
};
/**
 * @title EmployeesPageDTO
 **/
export type ZmsxMerchantComponentsSchemasEmployeesPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 员工名称
 **/
empName?: string;
/**
 * @description 工号
 **/
empNo?: string;
/**
 * @description 状态 0 停用； 1 启用
 * @format int32
 **/
enable?: number;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 员工手机号
 **/
phone?: string;
/**
 * @description 权限编码
 **/
roleNo?: string;
/**
 * @description 关联店铺查询
 * @format int64
 **/
shopId?: number;
};
/**
 * @title EmployeesVO
 **/
export type ZmsxMerchantComponentsSchemasEmployeesVO = {
/**
 * @description 账号类型：MERCHANT 商户主账号；BUSINESS 运营；FINANCE 财务；AREA_SHOP_MANAGE 区域店长；SHOP_MANAGE 店长；EMPLOYEE 门店员工
 **/
accountType: string;
/**
 * @description 是否是管理员，true: 是，false: 不是
 **/
adminFlag: boolean;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 创建人
 **/
createdBy: string;
/**
 * @description 员工ID
 * @format int64
 **/
empId: number;
/**
 * @description 员工编码
 **/
empNo: string;
/**
 * @description 状态 0 停用；1 启用
 * @format int32
 **/
enable: number;
/**
 * @description 员工简介
 **/
intro: string;
/**
 * @description 员工名称
 **/
name: string;
/**
 * @description 职业
 **/
occupation: string;
/**
 * @description 员工手机号
 **/
phone: string;
/**
 * @description 员工头像
 **/
photo: string;
/**
 * @description 员工角色编码
 **/
roleListJson: string;
/**
 * @description 员工角色
 **/
roles: string;
sex: string;
/**
 * @description 关联门店
 **/
shopNames: string;
};
/**
 * @title FileUploadDTO
 **/
export type ZmsxMerchantComponentsSchemasFileUploadDTO = {
/**
 * @description 需要OCR的图片地址
 **/
fileUrl: string;
};
/**
 * @title GoodsMerchantShopDTO
 **/
export type ZmsxMerchantComponentsSchemasGoodsMerchantShopDTO = {
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 已关联店铺ID合集
 **/
shopIds: number[];
/**
 * @description 店铺名称
 **/
shopName: string;
};
/**
 * @title GoodsMerchantShopVO
 **/
export type ZmsxMerchantComponentsSchemasGoodsMerchantShopVO = {
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 店铺名称
 **/
shopName: string;
};
/**
 * @title IDCardOcrVO
 **/
export type ZmsxMerchantComponentsSchemasIDCardOcrVO = {
/**
 * @description 地址
 **/
address: string;
/**
 * @description 发证机关 - 正面返回
 **/
authority: string;
/**
 * @description 出生-日
 **/
day: string;
/**
 * @description 图片地址
 **/
fileUrl: string;
/**
 * @description 出生-月
 **/
month: string;
/**
 * @description 姓名
 **/
name: string;
/**
 * @description 民族
 **/
nation: string;
/**
 * @description 身份证号
 **/
number: string;
/**
 * @description 性别
 **/
sex: string;
/**
 * @description 有效期 - 正面返回
 **/
timelimit: string;
/**
 * @description 出生-年
 **/
year: string;
};
/**
 * @title IconsDTO
 **/
export type ZmsxMerchantComponentsSchemasIconsDTO = {
/**
 * @description icon地址
 **/
icon: string;
/**
 * @description icon描述
 **/
iconName: string;
};
/**
 * @title IconsVO
 **/
export type ZmsxMerchantComponentsSchemasIconsVO = {
/**
 * @description 是否选中
 **/
choose: boolean;
/**
 * @description icon地址
 **/
icon: string;
/**
 * @description icon描述
 **/
iconName: string;
/**
 * @description 服务ICON表主键
 * @format int64
 **/
id: number;
};
/**
 * @title LastAccessMerchantVO
 **/
export type ZmsxMerchantComponentsSchemasLastAccessMerchantVO = {
/**
 * @description 审核状态
 * @format int32
 **/
auditStatus: number;
/**
 * @description 商户id
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户LOGO
 **/
merchantLogo: string;
/**
 * @description 商户全称
 **/
merchantName: string;
/**
 * @description 店铺数量
 * @format int32
 **/
shopCount: number;
};
/**
 * @title LicenseOcrVO
 **/
export type ZmsxMerchantComponentsSchemasLicenseOcrVO = {
/**
 * @description 公司地址
 **/
address: string;
/**
 * @description 公司注册日期
 **/
establishDate: string;
/**
 * @description 是否是复印件
 **/
isFake: boolean;
/**
 * @description 营业执照号码
 **/
licenseNo: string;
/**
 * @description 营业执照地址
 **/
licensePicUrl: string;
/**
 * @description 公司名称
 **/
name: string;
/**
 * @description 公司法人名称
 **/
person: string;
/**
 * @description 公司类型
 **/
type: string;
/**
 * @description 营业期限终止日期,长期返回: 29991231
 **/
validPeriod: string;
};
/**
 * @title MerchantAbilityShopQueryDTO
 **/
export type ZmsxMerchantComponentsSchemasMerchantAbilityShopQueryDTO = {
/**
 * @description 能力类型 ：STAGE_PAY:阶段付， SAFETY_PAY:安心冲
 **/
ability: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 进件状态：查询阶段付门店时选填：TRUE:返回已完成进件的门店 FALSE:开通阶段付能力的门店
 **/
entryStatus: boolean;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
};
/**
 * @title MerchantDetailsVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantDetailsVO = {
/**
 * @description 业务能力概览
 **/
abilityVOS: ZmsxMerchantComponentsSchemasAbilityVO[];
/**
 * @description 企业支付宝账号
 **/
alipayAccount: string;
/**
 * @description 审核意见
 **/
auditMsg: string;
/**
 * @description 审核状态：0审核中；1已通过；2已驳回
 * @format int32
 **/
auditStatus: number;
/**
 * @description 银行卡卡号
 **/
bankAccount: string;
/**
 * @description 开户行支行
 **/
bankBranchName: string;
/**
 * @description 银行卡开户名
 **/
bankCardName: string;
/**
 * @description 开户行
 **/
bankName: string;
/**
 * @description 经营类目
 **/
category: string;
/**
 * @description 经营类目经营类目描述
 **/
categoryDesc: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户营业执照编码
 **/
merchantLicenseNo: string;
/**
 * @description 商户营业执照
 **/
merchantLicensePic: string;
/**
 * @description 商户logo
 **/
merchantLogo: string;
/**
 * @description 商户全称名称
 **/
merchantName: string;
/**
 * @description 商户号
 **/
merchantNo: string;
/**
 * @description 是否是对公账户
 * @format int32
 **/
pubAccount: number;
/**
 * @description 商户简称
 **/
shortName: string;
};
/**
 * @title MerchantIconVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantIconVO = {
/**
 * @description 上传时间
 **/
createTime: string;
/**
 * @description icon地址
 **/
icon: string;
/**
 * @description 服务ICON表主键
 * @format int64
 **/
iconId: number;
/**
 * @description icon描述
 **/
iconName: string;
/**
 * @description icon类型 SERVICE 服务；FACILITY 设施
 **/
iconType: string;
/**
 * @description 适用行业  GENERAL 通用；HOTEL 酒店旅游；YOGA 瑜伽健身；LIFE 生活服务
 **/
industry: string;
};
/**
 * @title MerchantLoginInfo
 **/
export type ZmsxMerchantComponentsSchemasMerchantLoginInfo = {
/**
 * @description 已开通业务能力列表，STAGE_PAY 阶段付， SAFETY_PAY 安心充
 **/
abilities: string[];
/**
 * @description 登录账号ID
 * @format int64
 **/
accountId: number;
/**
 * @description 账号类型：MERCHANT 商户主账号；BUSINESS 运营；FINANCE 财务；AREA_SHOP_MANAGE 区域店长；SHOP_MANAGE 店长；EMPLOYEE 门店员工
 **/
accountType: string;
/**
 * @description 是否是管理员
 **/
adminFlag: boolean;
/**
 * @description 允许的小程序功能列表
 **/
allowAppletFunctions: string[];
/**
 * @description 允许的功能列表
 **/
allowFunctions: string[];
/**
 * @description 允许的操作权限列表
 **/
allowOperates: string[];
/**
 * @description 允许的店铺ID列表
 **/
allowShopIds: number[];
/**
 * @description 登录员工ID
 * @format int64
 **/
employeeId: number;
/**
 * @description 登录员工账号名
 **/
employeeLoginName: string;
/**
 * @description 登录员工名称
 **/
employeeName: string;
/**
 * @description 登录员工头像
 **/
employeePhoto: string;
/**
 * @description 登录员工电话
 **/
employeeTel: string;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户logo
 **/
merchantLogo: string;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 商户编号
 **/
merchantNo: string;
/**
 * @description 是否重置密码 false 未重置；true 已重置
 **/
resetPassword: boolean;
};
/**
 * @title MerchantOpenAbilityDTO
 **/
export type ZmsxMerchantComponentsSchemasMerchantOpenAbilityDTO = {
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 开通类型： STAGE_PAY:阶段付 SAFETY_PAY:安心充
 **/
type: string;
};
/**
 * @title MerchantPageDTO
 **/
export type ZmsxMerchantComponentsSchemasMerchantPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 是否启用  1:启用 0：未启用
 * @format int32
 **/
enable?: number;
/**
 * @description 商户名称
 **/
merchantName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 是否审核通过 true 查询审核通过数据；false 查询除审核通过之外的其他数据
 **/
pass?: boolean;
};
/**
 * @title MerchantPubTemplateDTO
 **/
export type ZmsxMerchantComponentsSchemasMerchantPubTemplateDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 是否启用, true 启用；false 停用
 **/
enable?: boolean;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 模板名称
 **/
templateName?: string;
/**
 * @description 模板分类：GENERAL 通用模板；HOTEL 酒店旅游；LIFE_SERVICE 生活服务；YOGA 健身瑜伽
 **/
templateType?: string;
};
/**
 * @title MerchantPubTemplateVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantPubTemplateVO = {
/**
 * @description 模板编码
 **/
appletTemplateId: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 是否启用
 **/
enable: boolean;
/**
 * @description 公共模板库ID
 * @format int64
 **/
templateId: number;
/**
 * @description 模板名称
 **/
templateName: string;
/**
 * @description 模板示例图，最多两个 ,隔开
 **/
templateSampleDiagram: string;
/**
 * @description 模板分类：GENERAL 通用模板；HOTEL 酒店旅游；LIFE_SERVICE 生活服务；YOGA 健身瑜伽
 **/
templateType: string;
/**
 * @description 模板版本号
 **/
templateVersion: string;
};
/**
 * @title MerchantShopAppletVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopAppletVO = {
/**
 * @description 开通手机号授权状态：WAIT_AUDIT 待申请；AUDIT 审核中；AGREE 审核通过；REJECT 审核驳回
 **/
alipayTelAudit: string;
/**
 * @description 申请手机号授权返回结果
 **/
alipayTelAuditMsg: string;
/**
 * @description 小程序类目,从zmsx-alipay服务获取小程序类目接口获取，多级类目A_B_C形式多层拼接
 **/
appCategory: string;
/**
 * @description 小程序类目,从zmsx-alipay服务获取小程序类目接口获取，多级类目A_B_C形式多层拼接
 **/
appCategoryName: string;
/**
 * @description appDesc
 **/
appDesc: string;
/**
 * @description 小程序英文名
 **/
appEnglishName: string;
/**
 * @description 小程序LOGO
 **/
appLogo: string;
/**
 * @description 小程序名称
 **/
appName: string;
/**
 * @description appSlogan
 **/
appSlogan: string;
/**
 * @description 小程序状态, CREATING: 创建中，SUCCESS: 创建成功，FAIL： 创建失败
 **/
appStatus: string;
/**
 * @description 状态描述
 **/
appStatusDesc: string;
/**
 * @description appletId
 * @format int64
 **/
appletId: number;
/**
 * @description 当面付状态, CREATING: 创建中，SUCCESS: 创建成功，FAIL： 创建失败
 **/
faceToFaceStatus: string;
/**
 * @description 当面付开通状态描述
 **/
faceToFaceStatusDesc: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 应用模板ID
 * @format int64
 **/
templateId: number;
/**
 * @description 模板名称（如果为空则查询模板列表否则展示名称以及示例图）
 **/
templateName: string;
/**
 * @description 模板示例图
 **/
templateSampleDiagram: string;
};
/**
 * @title MerchantShopDetailVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopDetailVO = {address: string;
contactPerson: string;
contactPhone: string;
/**
 * @format int64
 **/
shopId: number;
shopLogo: string;
shopName: string;
shopNo: string;
shortName: string;
};
/**
 * @title MerchantShopDetailsVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopDetailsVO = {
/**
 * @description 收款账号类型 0支付宝；1 银行卡；
 * @format int32
 **/
accountType: number;
/**
 * @description 详细地址
 **/
address?: string;
/**
 * @description 企业支付宝账号
 **/
alipayAccount?: string;
/**
 * @description 所在区
 **/
area?: string;
/**
 * @description 所在区编码
 **/
areaCode?: string;
/**
 * @description 银行卡卡号
 **/
bankAccount?: string;
/**
 * @description 开户行支行
 **/
bankBranchName?: string;
/**
 * @description 银行卡开户名
 **/
bankCardName?: string;
/**
 * @description 开户行
 **/
bankName?: string;
/**
 * @description 经营类目
 **/
category?: string;
/**
 * @description 经营类目经营类目描述
 **/
categoryDesc?: string;
/**
 * @description 所在市
 **/
city?: string;
/**
 * @description 所在市编码
 **/
cityCode?: string;
/**
 * @description 联系人邮箱
 **/
contactEmail?: string;
/**
 * @description 联系人
 **/
contactPerson?: string;
/**
 * @description 联系人电话
 **/
contactPhone?: string;
/**
 * @description 是否启用 1 启用；0 未启用
 * @format int32
 **/
enable?: number;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic?: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic?: string;
/**
 * @description 内景照
 **/
interiorPhotos?: string[];
/**
 * @description 经度
 * @format double
 **/
latitude?: number;
/**
 * @description 法人名称
 **/
legalName?: string;
/**
 * @description 法人身份证号
 **/
legalNumber?: string;
/**
 * @description 纬度
 * @format double
 **/
longitude?: number;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId?: number;
/**
 * @description 所在省份
 **/
province?: string;
/**
 * @description 所在省份编码
 **/
provinceCode?: string;
/**
 * @description 是否是对公账户
 * @format int32
 **/
pubAccount?: number;
/**
 * @description 结算账号
 **/
settleAccount?: string;
/**
 * @description 结算账户名称
 **/
settleAccountName?: string;
/**
 * @description 结算方式
 **/
settleType?: string;
/**
 * @description 门店分类 YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory?: string;
/**
 * @description 门头照
 **/
shopCovers?: string[];
/**
 * @description 店铺ID
 * @format int64
 **/
shopId?: number;
/**
 * @description 营业执照企业名称
 **/
shopLicenseName?: string;
/**
 * @description 商户营业执照编码
 **/
shopLicenseNo?: string;
/**
 * @description 商户营业执照
 **/
shopLicensePic?: string;
/**
 * @description 商户logo
 **/
shopLogo?: string;
/**
 * @description 门店全称名称
 **/
shopName?: string;
/**
 * @description 门店简称
 **/
shortName?: string;
};
/**
 * @title MerchantShopIndexVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopIndexVO = {
/**
 * @description 详细地址
 **/
address: string;
/**
 * @description 连锁门店类型  CHAIN：连锁  ALONE:单店
 **/
multipleShopType: string;
shopCovers: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 商户logo
 **/
shopLogo: string;
/**
 * @description 门店全称名称
 **/
shopName: string;
};
/**
 * @title MerchantShopQueryDTO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopQueryDTO = {
/**
 * @description 商户id
 * @format int64
 **/
merchantId: number;
};
/**
 * @title MerchantShopStageVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopStageVO = {
/**
 * @description 支付宝商户PID,回调后有
 **/
alipayPid?: string;
/**
 * @description appId
 **/
appId?: string;
/**
 * @description 分账比例，最多两位小数
 **/
separateLedgerRate: number;
/**
 * @description 分账账户信息集合
 **/
settleAccountList?: ZmsxMerchantComponentsSchemasSettleAccountVO[];
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 直付通商户ID
 **/
zftSmid?: string;
};
/**
 * @title MerchantShopStatusVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopStatusVO = {
/**
 * @description 小程序状态 为空就是待申请,PROCESS:商户处理中;TIMEOUT:商户处理超时;AGREED:商户同意授权;REJECTED:商户拒绝授权
 **/
appletStatus: string;
appletStatusDesc: string;
/**
 * @description 当面付状态，APPLY("apply","已申请")         NONE("none", "未签约"),         VALID("valid", "已生效"),         RESTRICT_VALID("restrictValid", "受限生效"),         AUDIT("audit", "审核中"),         WAITCONFIRM("waitConfirm", "待商户确认协议"),         AUDIT_REJECT("auditReject", "审核未通过"),         INVALID("invalid", "合约失效"),         RESTRICT_INVALID("restrictInvalid", "受限失效"),
 **/
facetofaceStatus: string;
facetofaceStatusDesc: string;
/**
 * @description 审核结果：     APPLY：已申请待审核。     AGREE：通过。     REJECT：驳回。     INVALID无效（isv代申请场景）
 **/
mobileAuthorizeStatus: string;
mobileAuthorizeStatusDesc: string;
/**
 * @format int64
 **/
shopId: number;
/**
 * @description 阶段付开通状态     已申请 APPLY     未补全 INCOMPLETE     审核中 UNDER_REVIEW     已通过 PASSED     未通过 FAILED
 **/
stagepayStatus: string;
stagepayStatusDesc: string;
/**
 * @description 直付通申请状态为空则表示待申请 APPLY:已申请待审核， PASSED 审核通过；REJECTED 申请驳回
 **/
zftApplyStatus: string;
zftApplyStatusDesc: string;
};
/**
 * @title MerchantShopVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopVO = {
/**
 * @description 门店地址
 **/
address: string;
/**
 * @description 蚂蚁门店开通状态  PASS：已开通；REJECT:开通失败；NONE：未开通;AUDIT：开通中；CLOSE:已关闭
 **/
antShopStatus: string;
/**
 * @description 蚂蚁门店开通状态描述
 **/
antShopStatusDesc: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系电话
 **/
contactPhone: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 店铺ID
 **/
shopId: string;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店全称
 **/
shopName: string;
/**
 * @description 店铺编号
 **/
shopNo: string;
/**
 * @description 门店简称
 **/
shortName: string;
/**
 * @description 安心充显示状态 true:显示；false:隐藏
 **/
showStatus: boolean;
};
/**
 * @title MerchantShopZftVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantShopZftVO = {
/**
 * @description 账号类型,PUBLIC: 对公，PRIVATE: 对私
 **/
bankAccountType: string;
/**
 * @description 账号使用类型，01-对公，02-对私
 **/
bankAccountUsageType: string;
/**
 * @description 开户支行名
 **/
bankBranchName: string;
/**
 * @description 卡户名
 **/
bankCardName: string;
/**
 * @description 银行卡号
 **/
bankCardNo: string;
/**
 * @description 开户行所在地-市(传名称)
 **/
bankCityName: string;
/**
 * @description 开户银行Code
 **/
bankCode: string;
/**
 * @description 开户银行名称
 **/
bankName: string;
/**
 * @description 开户行所在地-省(传名称)
 **/
bankProvinceName: string;
/**
 * @description 商户类目code
 **/
category: string;
/**
 * @description 商户类目描述
 **/
categoryName: string;
/**
 * @description 直付通开通的服务
 **/
services: string[];
/**
 * @description 结算支付宝账号，如果选择了结算方式为支付宝，字段不能为空
 **/
settleAlipayAccount: string;
/**
 * @description 结算方式，可选值有 bankCard: 银行卡，alipayAccount: 支付宝账号
 **/
settleType: string;
/**
 * @description 开通直付通的店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title MerchantTeacherDTO
 **/
export type ZmsxMerchantComponentsSchemasMerchantTeacherDTO = {
/**
 * @description 关联门店员工
 * @format int64
 **/
empId?: number;
/**
 * @description 介绍信息
 **/
introduction: string;
/**
 * @description 照片合集
 **/
photos?: ZmsxMerchantComponentsSchemasTeacherPhotosDTO[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
/**
 * @description 师资所属店铺
 * @format int64
 **/
shopId?: number;
/**
 * @description 教师表主键，有则修改无则新增
 * @format int64
 **/
teacherId?: number;
/**
 * @description 教师名称
 **/
teacherName: string;
/**
 * @description 教师头像
 **/
teacherPhoto: string;
};
/**
 * @title MerchantTeacherVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantTeacherVO = {
/**
 * @description 员工ID
 * @format int64
 **/
empId: number;
/**
 * @description 介绍信息
 **/
introduction: string;
/**
 * @description 照片合集
 **/
photos: ZmsxMerchantComponentsSchemasTeacherPhotosVO[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
/**
 * @description 教师表主键
 * @format int64
 **/
teacherId: number;
/**
 * @description 教师名称
 **/
teacherName: string;
/**
 * @description 教师头像
 **/
teacherPhoto: string;
};
/**
 * @title MerchantVO
 **/
export type ZmsxMerchantComponentsSchemasMerchantVO = {
/**
 * @description 已开通业务
 **/
ability: string;
auditMsg: string;
/**
 * @description 申请时间
 **/
createTime: string;
/**
 * @format int32
 **/
enable: number;
/**
 * @description 入驻时间
 **/
entryTime: string;
/**
 * @description 审核状态
 * @format int32
 **/
merchantAudit: number;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户logo
 **/
merchantLogo: string;
/**
 * @description 商户全称名称
 **/
merchantName: string;
/**
 * @description 商户号
 **/
merchantNo: string;
/**
 * @description 门店计数
 * @format int32
 **/
shopCount: number;
/**
 * @description 商户简称
 **/
shortName: string;
};
/**
 * @title MultipleShopDTO
 **/
export type ZmsxMerchantComponentsSchemasMultipleShopDTO = {
/**
 * @description 市编码
 **/
cityCode?: string;
/**
 * @description 纬度
 * @format double
 **/
latitude?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @description 连锁门店ID
 * @format int64
 **/
multipleShopId: number;
/**
 * @description 省份编码
 **/
provinceCode?: string;
/**
 * @description 店铺名称
 **/
shopName?: string;
};
/**
 * @title OpenApiDTO
 **/
export type ZmsxMerchantComponentsSchemasOpenApiDTO = {appId: string;
bizContent: string;
sign: string;
};
/**
 * @title OpenSafetyPayDTO
 **/
export type ZmsxMerchantComponentsSchemasOpenSafetyPayDTO = {
/**
 * @description 门店ID集合
 **/
shopIds: number[];
};
/**
 * @title OpenStagePayDTO
 **/
export type ZmsxMerchantComponentsSchemasOpenStagePayDTO = {
/**
 * @description 门店ID-主店的门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 门店ID集合
 **/
shopIds: number[];
};
/**
 * @title OpenStagePayShopDTO
 **/
export type ZmsxMerchantComponentsSchemasOpenStagePayShopDTO = {
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 连锁门店类型  CHAIN：连锁  ALONE:单店
 **/
type: string;
};
/**
 * @title OwnerSettledConfigVO
 **/
export type ZmsxMerchantComponentsSchemasOwnerSettledConfigVO = {effectiveConfigVO: ZmsxMerchantComponentsSchemasSettleConfigVO;
pendingConfigVO: ZmsxMerchantComponentsSchemasSettleConfigVO;
};
/**
 * @title OwnerSettledRecordPageDTO
 **/
export type ZmsxMerchantComponentsSchemasOwnerSettledRecordPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 结算流水号
 **/
ownerSettledNo?: string;
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 结算状态： WAIT:待结算；SUCCESS:已结算
 **/
settledStatus?: string;
/**
 * @description 结算月份
 **/
settledTime?: string;
/**
 * @description 结算时间-起
 **/
settledTimeBegin?: string;
/**
 * @description 结算时间-止
 **/
settledTimeEnd?: string;
/**
 * @description 门店id
 **/
shopIds?: number[];
};
/**
 * @title OwnerSettledRecordVO
 **/
export type ZmsxMerchantComponentsSchemasOwnerSettledRecordVO = {
/**
 * @description 支付宝账号
 **/
alipayAccount: string;
/**
 * @description 支付宝姓名
 **/
alipayName: string;
/**
 * @description 账号类型,01: 对公，02: 对私
 **/
bankAccountType: string;
/**
 * @description 开户支行名称
 **/
bankBranchName: string;
/**
 * @description 银行卡号
 **/
bankCardNumber: string;
/**
 * @description 开户行所在市
 **/
bankCityName: string;
/**
 * @description 开户行所在省
 **/
bankProvinceName: string;
/**
 * @description 创建时间（结算月份）
 **/
createTime: string;
/**
 * @description 预期结算时间
 **/
expectedSettledTime: string;
/**
 * @description 失败原因
 **/
failMsg: string;
/**
 * @description 结算记录主键id
 * @format int64
 **/
id: number;
/**
 * @description 联行号code
 **/
interBankCode: string;
/**
 * @description 参与结算金额
 **/
joiningSettledAmount: string;
/**
 * @description 开户银行code
 **/
openBankCode: string;
/**
 * @description 开户名称
 **/
openCardName: string;
/**
 * @description 结算流水号
 **/
ownerSettledNo: string;
/**
 * @description 结算金额
 **/
settledAmount: number;
/**
 * @description 结算比例：0-100
 * @format double
 **/
settledRate: number;
/**
 * @description 结算基数统计范围：MONTH：月卡；WEEK：周卡；TIME：次卡；PAYMENT：买单；
 **/
settledScope: string;
/**
 * @description 结算状态; WAIT:待结算；SUCCESS:已结算
 **/
settledStatus: string;
/**
 * @description 结算日期：1-28
 * @format int32
 **/
settledTime: number;
/**
 * @description 结算方式，可选值有 bankCard: 银行卡，alipayAccount: 支付宝账号
 **/
settledType: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 合计金额
 **/
totalAmount: string;
};
/**
 * @title PageDTO
 **/
export type ZmsxMerchantComponentsSchemasPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title PartnerShopPageVO
 **/
export type ZmsxMerchantComponentsSchemasPartnerShopPageVO = {
/**
 * @description 商户PID
 **/
alipayPid: string;
/**
 * @description 小程序ID
 **/
appId: string;
/**
 * @description 小程序logo
 **/
appLogo: string;
/**
 * @description 小程序名称
 **/
appName: string;
/**
 * @description 连锁店铺列表
 **/
chainMerchantShopVOList: ZmsxMerchantComponentsSchemasChainMerchantShopVO[];
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 门店创建时间
 **/
createTime: string;
/**
 * @description 是否启用 0 未启用；1 启用
 * @format int32
 **/
enable: number;
entryStatus: boolean;
/**
 * @description 连锁店铺ID
 * @format int64
 **/
multipleShopId: number;
multipleShopType: string;
openOverview: ZmsxMerchantComponentsSchemasMerchantShopStatusVO;
/**
 * @description 业主方结算： true:已启用；false:未启用；null:未配置
 **/
settledEnable: boolean;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 店铺logo
 **/
shopLogo: string;
/**
 * @description 店铺名称
 **/
shopName: string;
/**
 * @description 店铺编码
 **/
shopNo: string;
/**
 * @description 直付通商户号
 **/
zftSmid: string;
};
/**
 * @title PartnerUnifyShopVO
 **/
export type ZmsxMerchantComponentsSchemasPartnerUnifyShopVO = {
/**
 * @description 业务能力
 **/
ability: string;
/**
 * @description 门店地址
 **/
address: string;
/**
 * @description 小程序APPid
 **/
appId: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 门店状态 true 起用, false 停用
 **/
enable: boolean;
/**
 * @description 门店纬度
 * @format double
 **/
latitude: number;
/**
 * @description 门店经度
 * @format double
 **/
longitude: number;
/**
 * @description 门店分类 YOGA 健身瑜伽, EDU 教培, PET 宠物, SPA 美业, OTHER 其他
 **/
shopCategory: string;
/**
 * @description 门店logo
 **/
shopLogo: string;
/**
 * @description 门店全称
 **/
shopName: string;
/**
 * @description 是否开通阶段付 true 已开通，false 未开通
 **/
stagePay: boolean;
/**
 * @description id
 * @format int64
 **/
unifyShopId: number;
/**
 * @description 修改时间
 **/
updateTime: string;
};
/**
 * @title PubIconPageDTO
 **/
export type ZmsxMerchantComponentsSchemasPubIconPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description icon类型 SERVICE 服务；FACILITY 设施
 **/
iconType?: string;
/**
 * @description 适用行业  GENERAL 通用；HOTEL 酒店旅游；YOGA 瑜伽健身；LIFE 生活服务
 **/
industry?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title PubIconsDTO
 **/
export type ZmsxMerchantComponentsSchemasPubIconsDTO = {
/**
 * @description icon类型 SERVICE 服务；FACILITY 设施
 **/
iconType: string;
/**
 * @description icon列表
 **/
icons: ZmsxMerchantComponentsSchemasIconsDTO[];
/**
 * @description 适用行业  GENERAL 通用；HOTEL 酒店旅游；YOGA 瑜伽健身；LIFE 生活服务
 **/
industry: string;
};
/**
 * @title PubTemplateEditDTO
 **/
export type ZmsxMerchantComponentsSchemasPubTemplateEditDTO = {
/**
 * @description 公共模板库ID
 * @format int64
 **/
templateId: number;
/**
 * @description 模板名称
 **/
templateName: string;
/**
 * @description 模板示例图，最多两个
 **/
templateSampleDiagram: string;
/**
 * @description 模板分类：GENERAL 通用模板；HOTEL 酒店旅游；LIFE_SERVICE 生活服务；YOGA 健身瑜伽
 **/
templateType: string;
/**
 * @description 模板版本号
 **/
templateVersion: string;
};
/**
 * @title RedpkgVO
 **/
export type ZmsxMerchantComponentsSchemasRedpkgVO = {
/**
 * @description 优惠权益
 **/
benefitDesc: string;
/**
 * @description 任务金额
 **/
redpkgFee: string;
/**
 * @description 任务ID
 * @format int64
 **/
taskId: number;
};
/**
 * @title ResetPasswordDTO
 **/
export type ZmsxMerchantComponentsSchemasResetPasswordDTO = {
/**
 * @description 确认密码
 **/
confirmPassword: string;
/**
 * @description 新密码
 **/
newPassword: string;
};
/**
 * @title RewardsShopPageVO
 **/
export type ZmsxMerchantComponentsSchemasRewardsShopPageVO = {
/**
 * @description 已开通服务：STAGE_PAY:阶段付,SAFETY_PAY:安心充
 **/
abilities: string[];
ability: string;
/**
 * @description 企业支付宝账号
 **/
alipayAccount: string;
/**
 * @description 小程序
 **/
appName: string;
/**
 * @description 能否发放奖励金
 **/
canSend: boolean;
/**
 * @description 门店创建时间
 * @format date-time
 **/
createTime: string;
/**
 * @description 进件状态
 **/
entryStatus: boolean;
/**
 * @description 所属商户
 **/
merchantName: string;
/**
 * @description 连锁门店id
 **/
multipleShopId: string;
/**
 * @description 主店名称
 **/
multipleShopName: string;
/**
 * @description 门店类型
 **/
multipleShopType: string;
/**
 * @description 门店类型-str
 **/
multipleShopTypeStr: string;
/**
 * @description 关联服务商
 **/
partnerName: string;
/**
 * @description 奖励金金额
 * @format double
 **/
rewards: number;
/**
 * @description 发放记录id
 * @format int64
 **/
rewardsSendRecordId: number;
/**
 * @description 发放状态
 **/
sendStatus: boolean;
/**
 * @description 结算方式 ,可选值有 bankCard: 银行卡，alipayAccount: 支付宝账号
 **/
settleType: string;
/**
 * @description 店铺id
 * @format int64
 **/
shopId: number;
/**
 * @description 店铺名称
 **/
shopName: string;
/**
 * @description 店铺编码
 **/
shopNo: string;
subsidyRuleVO: ZmsxMerchantComponentsSchemasSubsidyRuleVO;
};
/**
 * @title RewardsShopQueryDTO
 **/
export type ZmsxMerchantComponentsSchemasRewardsShopQueryDTO = {
/**
 * @description 已开通服务；STAGE_PAY:阶段付,SAFETY_PAY:安心充;全部不传
 **/
ability?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商户名称
 **/
merchantName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 服务商id
 * @format int64
 **/
partnerId?: number;
/**
 * @description 门店名称
 **/
shopName?: string;
};
/**
 * @title RoleInfoDTO
 **/
export type ZmsxMerchantComponentsSchemasRoleInfoDTO = {
/**
 * @description 小程序功能列表
 **/
appletFunctionList: string[];
/**
 * @description 商户后台功能列表
 **/
functionList: string[];
/**
 * @description 数据功能列表
 **/
operateList: string[];
/**
 * @description 角色描述
 **/
roleDesc: string;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
/**
 * @description 角色名称
 **/
roleName: string;
};
/**
 * @title RoleInfoVO
 **/
export type ZmsxMerchantComponentsSchemasRoleInfoVO = {
/**
 * @description 小程序功能列表
 **/
appletFunctionList: string[];
/**
 * @description 角色功能列表
 **/
functionList: string[];
/**
 * @description 数据功能列表
 **/
operateList: string[];
/**
 * @description 角色描述
 **/
roleDesc: string;
/**
 * @description 状态，启用/停用
 **/
roleEnable: boolean;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
/**
 * @description 角色名称
 **/
roleName: string;
/**
 * @description 角色编号
 **/
roleNo: string;
/**
 * @description 角色类型,INIT: 预设，DEFINED: 自定义
 **/
roleType: string;
};
/**
 * @title RolePageDTO
 **/
export type ZmsxMerchantComponentsSchemasRolePageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 角色描述
 **/
roleDesc?: string;
/**
 * @description 角色状态，true: 启用，false: 禁用
 **/
roleEnable?: boolean;
/**
 * @description 角色名称
 **/
roleName?: string;
};
/**
 * @title RoleSwitchDTO
 **/
export type ZmsxMerchantComponentsSchemasRoleSwitchDTO = {
/**
 * @description 状态，true: 启用，false: 禁用
 **/
roleEnable: boolean;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
};
/**
 * @title SafetyShopDTO
 **/
export type ZmsxMerchantComponentsSchemasSafetyShopDTO = {
/**
 * @description 所在区编码
 **/
areaCode?: string;
/**
 * @description 所在市编码
 **/
cityCode?: string;
/**
 * @description 维度
 * @format double
 **/
latitude?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @description 商户id
 * @format int64
 **/
merchantId: number;
/**
 * @description 所在省份编码
 **/
provinceCode?: string;
};
/**
 * @title SafetyShopPageDTO
 **/
export type ZmsxMerchantComponentsSchemasSafetyShopPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商户名称
 **/
merchantName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 服务商id
 * @format int64
 **/
partnerId?: number;
/**
 * @description 门店名称
 **/
shopName?: string;
/**
 * @description 显示状态 true:显示；false:隐藏
 **/
showStatus?: boolean;
};
/**
 * @title SafetyShopPageVO
 **/
export type ZmsxMerchantComponentsSchemasSafetyShopPageVO = {
/**
 * @description 地址
 **/
address: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 门店创建时间
 **/
createTime: string;
/**
 * @description 店铺ID
 **/
shopId: string;
/**
 * @description 店铺logo
 **/
shopLogo: string;
/**
 * @description 店铺名称
 **/
shopName: string;
/**
 * @description 店铺编码
 **/
shopNo: string;
/**
 * @description 店铺简称
 **/
shortName: string;
/**
 * @description 安心充显示状态 true:显示；false:隐藏
 **/
showStatus: boolean;
};
/**
 * @title ServiceIconsVO
 **/
export type ZmsxMerchantComponentsSchemasServiceIconsVO = {
/**
 * @description 设施ICON列表
 **/
facilityIcons: ZmsxMerchantComponentsSchemasIconsVO[];
/**
 * @description 服务ICON列表
 **/
serviceIcons: ZmsxMerchantComponentsSchemasIconsVO[];
};
/**
 * @title SetOwnerSettledConfigDTO
 **/
export type ZmsxMerchantComponentsSchemasSetOwnerSettledConfigDTO = {
/**
 * @description 支付宝账号
 **/
alipayAccount?: string;
/**
 * @description 支付宝姓名
 **/
alipayName?: string;
/**
 * @description 账号类型,01: 对公，02: 对私
 **/
bankAccountType?: string;
/**
 * @description 开户支行名称
 **/
bankBranchName?: string;
/**
 * @description 银行卡号
 **/
bankCardNumber?: string;
/**
 * @description 开户行所在市
 **/
bankCityName?: string;
/**
 * @description 开户行所在省
 **/
bankProvinceName?: string;
/**
 * @description 是否启用
 * @format int32
 **/
enable: number;
/**
 * @description 业务方结算配置-主键id
 * @format int64
 **/
id?: number;
/**
 * @description 联行号code
 **/
interBankCode?: string;
/**
 * @description 开户银行code:例如：ABC
 **/
openBankCode?: string;
/**
 * @description 开户银行name:例如 中国农业银行
 **/
openBankName?: string;
/**
 * @description 开户名称
 **/
openCardName?: string;
/**
 * @description 结算比例：0-100
 * @format double
 **/
settledRate: number;
/**
 * @description 结算基数统计范围：MONTH：月卡；WEEK：周卡；DISCOUNT_TIME：次卡；PAYMENT：买单；
 **/
settledScope: string[];
/**
 * @description 结算日期：1-28
 * @format int32
 **/
settledTime: number;
/**
 * @description 结算方式，可选值有 bankCard: 银行卡，alipayAccount: 支付宝账号
 **/
settledType: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
};
/**
 * @title SetSubsidyRulesDTO
 **/
export type ZmsxMerchantComponentsSchemasSetSubsidyRulesDTO = {
/**
 * @description 补贴比例,最多两位小数
 **/
ratio: string;
/**
 * @description 补贴政策 SUBSIDY:补贴；目前就只有补贴，可以不穿
 **/
rule?: string;
/**
 * @description 店铺id合集
 **/
shopIds: number[];
/**
 * @description 补贴方式 SUBSIDY_PRE：补贴前置；SUBSIDY_POST：补贴后置；SUBSIDY_ACTUAL_USE：按实际核销比例补贴
 **/
way: string;
};
/**
 * @title SettleAccountVO
 **/
export type ZmsxMerchantComponentsSchemasSettleAccountVO = {
/**
 * @description 收款方实名，必须是真实姓名
 **/
payeeRealName: string;
/**
 * @description 分账比例，最多两位小数
 **/
separateLedgerRate: number;
/**
 * @description 分账账户, 支付宝登录账号
 **/
settleAccount: string;
};
/**
 * @title SettleConfigVO
 **/
export type ZmsxMerchantComponentsSchemasSettleConfigVO = {
/**
 * @description 支付宝账号
 **/
alipayAccount: string;
/**
 * @description 支付宝姓名
 **/
alipayName: string;
/**
 * @description 账号类型,01: 对公，02: 对私
 **/
bankAccountType: string;
/**
 * @description 开户支行名称
 **/
bankBranchName: string;
/**
 * @description 银行卡号
 **/
bankCardNumber: string;
/**
 * @description 开户行所在市
 **/
bankCityName: string;
/**
 * @description 开户行所在省
 **/
bankProvinceName: string;
/**
 * @description 是否启用; 0:未启用；1：启用
 * @format int32
 **/
enable: number;
/**
 * @description 业务方结算配置-主键id
 * @format int64
 **/
id: number;
/**
 * @description 联行号code
 **/
interBankCode: string;
/**
 * @description 开户银行
 **/
openBankCode: string;
/**
 * @description 开户银行名称
 **/
openBankName: string;
/**
 * @description 开户名称
 **/
openCardName: string;
/**
 * @description 结算比例：0-100
 * @format double
 **/
settledRate: number;
/**
 * @description 结算基数统计范围：MONTH：月卡；WEEK：周卡；TIME：次卡；PAYMENT：买单；
 **/
settledScope: string[];
/**
 * @description 结算日期：1-28
 * @format int32
 **/
settledTime: number;
/**
 * @description 结算方式，可选值有 bankCard: 银行卡，alipayAccount: 支付宝账号
 **/
settledType: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
};
/**
 * @title SettledMerchantStatusVO
 **/
export type ZmsxMerchantComponentsSchemasSettledMerchantStatusVO = {
/**
 * @description 入驻状态：true:已入驻；false:未入驻
 **/
settledStatus: boolean;
/**
 * @description 开通阶段付状态：true:已开通； false:未开通
 **/
stagePayStatus: boolean;
};
/**
 * @title SettledRecordDetailVO
 **/
export type ZmsxMerchantComponentsSchemasSettledRecordDetailVO = {
/**
 * @description 创建时间（结算月份）
 **/
createTime: string;
/**
 * @description 结算记录id
 * @format int64
 **/
recordId: number;
/**
 * @description 结算比例
 * @format double
 **/
settledRate: number;
settledRecord: ZmsxMerchantComponentsSchemasPageVO_StagePayIncomeFlowVO_;
/**
 * @description 门店名称
 **/
shopName: string;
};
/**
 * @title ShopAppletDTO
 **/
export type ZmsxMerchantComponentsSchemasShopAppletDTO = {
/**
 * @description 小程序类目,从zmsx-alipay服务获取小程序类目接口获取，多级类目A_B_C形式多层拼接
 **/
appCategory: string;
/**
 * @description 小程序类目,从zmsx-alipay服务获取小程序类目接口获取，多级类目A_B_C形式多层拼接
 **/
appCategoryName: string;
/**
 * @description 小程序描述
 **/
appDesc: string;
/**
 * @description 小程序英文名
 **/
appEnglishName: string;
/**
 * @description 小程序LOGO
 **/
appLogo: string;
/**
 * @description 小程序名称
 **/
appName: string;
/**
 * @description 小程序slogan
 **/
appSlogan: string;
/**
 * @description 小程序ID
 * @format int64
 **/
appletId: number;
/**
 * @description 店铺ID,如果是创建服务商的小程序，shopId=0
 * @format int64
 **/
shopId: number;
/**
 * @description 模板ID
 * @format int64
 **/
templateId: number;
};
/**
 * @title ShopAppletPageDTO
 **/
export type ZmsxMerchantComponentsSchemasShopAppletPageDTO = {
/**
 * @description 小程序名称
 **/
appletName?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商户ID
 **/
merchantId?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title ShopAppletVO
 **/
export type ZmsxMerchantComponentsSchemasShopAppletVO = {
/**
 * @description 小程序APPID
 **/
appId: string;
/**
 * @description 小程序ID
 * @format int64
 **/
appletId: number;
/**
 * @description 小程序名称
 **/
appletName: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 是否达标
 **/
standard: boolean;
};
/**
 * @title ShopBalanceAccountVO
 **/
export type ZmsxMerchantComponentsSchemasShopBalanceAccountVO = {
/**
 * @description 门店账户余额
 **/
balance: number;
/**
 * @description 门店收款账户
 **/
shopAccountNo: string;
};
/**
 * @title ShopBalanceFlowVO
 **/
export type ZmsxMerchantComponentsSchemasShopBalanceFlowVO = {
/**
 * @description 流水业务类型VERIFY 核销
     SUBSIDY 补贴
     WITHDRAW 提现
     PAYMENT 买单
     STAGE_PAY_GOODS 阶段付商品购买
     BUY_GOODS 直接购买
 **/
balanceBizType: string;
/**
 * @description 业务备注
 **/
bizComment: string;
/**
 * @description 业务类型
 **/
bizType: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 流水金额
 **/
flowAmount: number;
/**
 * @description 流向类型， 流入 INFLOW, 流出 OUTFLOW
 **/
flowType: string;
/**
 * @description 外部流水号
 **/
outSerialNo: string;
/**
 * @description 前置金额
 **/
preAmount: number;
};
/**
 * @title ShopClaimDTO
 **/
export type ZmsxMerchantComponentsSchemasShopClaimDTO = {
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 商户营业执照编码
 **/
shopLicenseNo?: string;
/**
 * @description 商户营业执照
 **/
shopLicensePic: string;
/**
 * @description 统一门店主键ID
 * @format int64
 **/
unifyId: number;
};
/**
 * @title ShopDTO
 **/
export type ZmsxMerchantComponentsSchemasShopDTO = {
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 店铺名称
 **/
shopName: string;
};
/**
 * @title ShopDetailVO
 **/
export type ZmsxMerchantComponentsSchemasShopDetailVO = {
/**
 * @description 门店地址
 **/
address: string;
/**
 * @description 联系电话
 **/
contractTel: string;
/**
 * @description 距离
 * @format double
 **/
distance: number;
/**
 * @description 门店 门头照
 **/
shopCover: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 门店名称
 **/
shopName: string;
};
/**
 * @title ShopEnterDTO
 **/
export type ZmsxMerchantComponentsSchemasShopEnterDTO = {
/**
 * @description 经营类目
 **/
category: string;
/**
 * @description 经营类目描述
 **/
categoryDesc: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 商户营业执照编码
 **/
shopLicenseNo?: string;
/**
 * @description 商户营业执照
 **/
shopLicensePic: string;
/**
 * @description 营业执照店铺名称
 **/
shopName: string;
};
/**
 * @title ShopExamplesDetailVO
 **/
export type ZmsxMerchantComponentsSchemasShopExamplesDetailVO = {
/**
 * @description 作者
 **/
authorName: string;
/**
 * @description 封面图
 **/
caseCover: string;
/**
 * @description 案例简介
 **/
caseIntro: string;
/**
 * @description 案例日期
 **/
caseTime: string;
/**
 * @description 案例ID
 * @format int64
 **/
id: number;
/**
 * @description 案例标题
 **/
title: string;
};
/**
 * @title ShopExamplesPageDTO
 **/
export type ZmsxMerchantComponentsSchemasShopExamplesPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title ShopExamplesVO
 **/
export type ZmsxMerchantComponentsSchemasShopExamplesVO = {
/**
 * @description 封面图
 **/
caseCover: string;
/**
 * @description 案例简介
 **/
caseIntro: string;
/**
 * @description 案例ID
 * @format int64
 **/
id: number;
};
/**
 * @title ShopIconsVO
 **/
export type ZmsxMerchantComponentsSchemasShopIconsVO = {
/**
 * @description icon地址
 **/
icon: string;
/**
 * @description icon名称
 **/
iconName: string;
};
/**
 * @title ShopIntroduceDTO
 **/
export type ZmsxMerchantComponentsSchemasShopIntroduceDTO = {
/**
 * @description 面积（999㎡）
 **/
acreage?: string;
/**
 * @description 本次关联服务与设施id合集,隔开
 **/
iconIds: string[];
/**
 * @description 店铺介绍
 **/
introduce: string;
/**
 * @description 店铺相册合集
 **/
photos: ZmsxMerchantComponentsSchemasShopPhotosDTO[];
/**
 * @description 场馆介绍封面图
 **/
shopCover?: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title ShopIntroduceDetailsVO
 **/
export type ZmsxMerchantComponentsSchemasShopIntroduceDetailsVO = {
/**
 * @description 面积（999㎡）
 **/
acreage: string;
/**
 * @description 服务与设施id合集
 **/
iconIds: string[];
/**
 * @description 店铺介绍
 **/
introduce: string;
/**
 * @description 店铺相册列表
 **/
photos: ZmsxMerchantComponentsSchemasShopPhotosVO[];
/**
 * @description 场馆介绍封面图
 **/
shopCover: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title ShopItemPageVO
 **/
export type ZmsxMerchantComponentsSchemasShopItemPageVO = {
/**
 * @description 支持项目,由、分割
 **/
items: string;
/**
 * @description 门店id
 **/
shopId: string;
/**
 * @description 项目名称
 **/
shopName: string;
/**
 * @description 项目编号
 **/
shopNo: string;
subsidyRuleVO: ZmsxMerchantComponentsSchemasSubsidyRuleVO;
};
/**
 * @title ShopItemQueryDTO
 **/
export type ZmsxMerchantComponentsSchemasShopItemQueryDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 门店名称
 **/
shopName?: string;
};
/**
 * @title ShopLeadsVO
 **/
export type ZmsxMerchantComponentsSchemasShopLeadsVO = {
/**
 * @description 详细地址
 **/
address: string;
/**
 * @description 经营类目
 **/
category: string;
/**
 * @description 经营类目描述
 **/
categoryDesc: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 申请时间
 **/
createTime: string;
/**
 * @description 入驻申请记录主键id
 * @format int64
 **/
id: number;
/**
 * @description 商户营业执照编码
 **/
shopLicenseNo: string;
/**
 * @description 商户营业执照
 **/
shopLicensePic: string;
/**
 * @description 店铺名称/商户名称
 **/
shopName: string;
/**
 * @description 入驻申请类型：CLAIM:认领；ENTRY:入驻
 **/
type: string;
};
/**
 * @title ShopPageDTO
 **/
export type ZmsxMerchantComponentsSchemasShopPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 连锁门店类型  CHAIN：连锁  ALONE:单店
 **/
multipleShopType?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 店铺名称
 **/
shopName?: string;
/**
 * @description 安心充显示状态 true:显示；false:隐藏
 **/
showStatus?: boolean;
};
/**
 * @title ShopPhotosDTO
 **/
export type ZmsxMerchantComponentsSchemasShopPhotosDTO = {
/**
 * @description 店铺照片合集
 **/
photos: string[];
/**
 * @description 相册名称
 **/
photosName: string;
};
/**
 * @title ShopPhotosVO
 **/
export type ZmsxMerchantComponentsSchemasShopPhotosVO = {
/**
 * @description 店铺照片合集
 **/
photos: string[];
/**
 * @description 相册名称
 **/
photosName: string;
};
/**
 * @title ShopTagsDTO
 **/
export type ZmsxMerchantComponentsSchemasShopTagsDTO = {
/**
 * @description 门店ids
 **/
shopIds: number[];
/**
 * @description 标签
 **/
shopTags: string[];
};
/**
 * @title ShopTagsPageDTO
 **/
export type ZmsxMerchantComponentsSchemasShopTagsPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title ShopTagsPageVO
 **/
export type ZmsxMerchantComponentsSchemasShopTagsPageVO = {
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 门店标签
 **/
shopTags: string[];
/**
 * @description 门店标签，用 ; 分隔
 **/
shopTagsStr: string;
};
/**
 * @title ShopVO
 **/
export type ZmsxMerchantComponentsSchemasShopVO = {
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 店铺名称
 **/
shopName: string;
};
/**
 * @title StageCreateDTO
 **/
export type ZmsxMerchantComponentsSchemasStageCreateDTO = {
/**
 * @description 分账比例，最多两位小数
 **/
separateLedgerRate: number;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title StagePayIncomeDetailVO
 **/
export type ZmsxMerchantComponentsSchemasStagePayIncomeDetailVO = {
/**
 * @description 支出金额
 **/
expenditureAmount: string;
/**
 * @description 收入金额
 **/
incomeAmount: string;
incomeFlows: ZmsxMerchantComponentsSchemasPageVO_StagePayIncomeFlowVO_;
};
/**
 * @title StagePayIncomeFlowPageDTO
 **/
export type ZmsxMerchantComponentsSchemasStagePayIncomeFlowPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 收入类型: IN：收入；OUT:支出
 **/
incomeType?: string;
/**
 * @description 订单编号
 **/
orderNo?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 结算记录id
 * @format int64
 **/
recordId?: number;
/**
 * @description 门店ids
 **/
shopIds?: number[];
/**
 * @description 入账时间起
 **/
timeBegin?: string;
/**
 * @description 入账时间止
 **/
timeEnd?: string;
};
/**
 * @title StagePayIncomeFlowVO
 **/
export type ZmsxMerchantComponentsSchemasStagePayIncomeFlowVO = {
/**
 * @description 金额(收支金额/实付金额)
 **/
amount: string;
/**
 * @description 业务描述
 **/
businessDesc: string;
/**
 * @description 业务类型（MONTH：月卡；WEEK：周卡；TIME：次卡；PAYMENT：买单；）用于结算记录统计
 **/
businessType: string;
/**
 * @description 创建时间/入账时间
 **/
createTime: string;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 流水号
 **/
incomeNo: string;
/**
 * @description 收支类型（IN：收入；OUT:支出）
 **/
incomeType: string;
/**
 * @description 参与结算金额
 **/
joiningSettledAmount: string;
/**
 * @description 商户id
 * @format int64
 **/
merchantId: number;
/**
 * @description 关联订单编号
 **/
orderNo: string;
/**
 * @description 服务商id
 * @format int64
 **/
partnerId: number;
/**
 * @description 结算金额
 **/
settledAmount: string;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 阶段付信息（例如：1/12阶段）
 **/
stagePayInfo: string;
};
/**
 * @title StagePayShopPageDTO
 **/
export type ZmsxMerchantComponentsSchemasStagePayShopPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商户名称
 **/
merchantName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 服务商id
 * @format int64
 **/
partnerId?: number;
/**
 * @description 门店名称
 **/
shopName?: string;
};
/**
 * @title SubsidyRuleVO
 **/
export type ZmsxMerchantComponentsSchemasSubsidyRuleVO = {
/**
 * @description 补贴比例,最多两位小数
 **/
ratio: string;
/**
 * @description 补贴政策 SUBSIDY_PRE：补贴前置；SUBSIDY_POST：补贴后置；SUBSIDY_ACTUAL_USE：按实际核销比例补贴
 **/
rule: string;
/**
 * @description 补贴方式:SUBSIDY：补贴
 **/
way: string;
};
/**
 * @title TeacherPageDTO
 **/
export type ZmsxMerchantComponentsSchemasTeacherPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 师资所属店铺
 * @format int64
 **/
shopId?: number;
};
/**
 * @title TeacherPhotosDTO
 **/
export type ZmsxMerchantComponentsSchemasTeacherPhotosDTO = {
/**
 * @description 照片地址
 **/
picture: string;
};
/**
 * @title TeacherPhotosVO
 **/
export type ZmsxMerchantComponentsSchemasTeacherPhotosVO = {
/**
 * @description 照片名称
 **/
photoName: string;
/**
 * @description 照片地址
 **/
picture: string;
};
/**
 * @title UnifyPageDTO
 **/
export type ZmsxMerchantComponentsSchemasUnifyPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 可用状态 true 可用；false 不可用
 **/
enable?: boolean;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 服务商ID
 * @format int64
 **/
partnerId?: number;
/**
 * @description 门店全称
 **/
shopName?: string;
};
/**
 * @title UnifyShopDTO
 **/
export type ZmsxMerchantComponentsSchemasUnifyShopDTO = {
/**
 * @description 维度
 * @format double
 **/
latitude?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
};
/**
 * @title UnifyShopPageVO
 **/
export type ZmsxMerchantComponentsSchemasUnifyShopPageVO = {
/**
 * @description 详细地址
 **/
address: string;
/**
 * @description 小程序APP_ID
 **/
appId: string;
/**
 * @description 经营类目
 **/
category: string;
/**
 * @description 经营类目描述
 **/
categoryDesc: string;
/**
 * @description 距离（单位：KM）
 * @format double
 **/
distance: number;
/**
 * @description 已进件门店关联商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 门店分类 YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory: string;
/**
 * @description 已进件门店关联ID
 * @format int64
 **/
shopId: number;
/**
 * @description 店铺logo地址 有就展示 没有就显示默认logo
 **/
shopLogo: string;
/**
 * @description 营业执照店铺名称
 **/
shopName: string;
/**
 * @description 统一门店主键ID
 * @format int64
 **/
unifyId: number;
};
/**
 * @title UnifyShopQueryDTO
 **/
export type ZmsxMerchantComponentsSchemasUnifyShopQueryDTO = {
/**
 * @description 已开通能力：阶段付：STAGE_PAY，SAFETY_PAY:安心冲
 **/
ability?: string;
/**
 * @description 经营类目编码  其他类目传OTHER-- 暂停使用
 **/
category?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 是否有红包
 **/
hasRedpkg?: boolean;
/**
 * @description 维度
 * @format double
 **/
latitude?: number;
/**
 * @format int32
 **/
level?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @format double
 **/
maxLat?: number;
/**
 * @format double
 **/
maxLon?: number;
/**
 * @format double
 **/
minLat?: number;
/**
 * @format double
 **/
minLon?: number;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 门店分类 YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory?: string;
/**
 * @description 店铺名
 **/
shopName?: string;
/**
 * @description 是否系统门店
 **/
systemShop?: boolean;
};
/**
 * @title UpadateMerchantShopDTO
 **/
export type ZmsxMerchantComponentsSchemasUpadateMerchantShopDTO = {
/**
 * @description 详细地址
 **/
address: string;
/**
 * @description 企业支付宝账号
 **/
alipayAccount: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 经营类目
 **/
category: string;
/**
 * @description 经营类目经营类目描述
 **/
categoryDesc: string;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 联系人邮箱
 **/
contactEmail: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 内景照
 **/
interiorPhotos: string[];
/**
 * @description 经度
 * @format double
 **/
latitude: number;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 纬度
 * @format double
 **/
longitude: number;
/**
 * @description 商户Id
 * @format int64
 **/
merchantId: number;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 结算账号
 **/
settleAccount: string;
/**
 * @description 结算账户名称
 **/
settleAccountName: string;
/**
 * @description 结算方式, 支付宝: alipayAccount,  银行卡: bankCard; 目前仅支持支付宝
 **/
settleType: string;
/**
 * @description 门店分类：  YOGA：瑜伽 EDU：教培 PET：宠物  SPA：美容  OTHER：其他
 **/
shopCategory: string;
/**
 * @description 门头照
 **/
shopCovers: string[];
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 营业执照企业名称
 **/
shopLicenseName: string;
/**
 * @description 商户营业执照编码
 **/
shopLicenseNo: string;
/**
 * @description 商户营业执照
 **/
shopLicensePic: string;
/**
 * @description 商户logo
 **/
shopLogo: string;
/**
 * @description 门店全称名称
 **/
shopName: string;
/**
 * @description 服务商类型 0 企业；1 个体工商户
 * @format int32
 **/
shopType: number;
/**
 * @description 门店简称
 **/
shortName: string;
};
/**
 * @title UpdateCourseSubscribeDTO
 **/
export type ZmsxMerchantComponentsSchemasUpdateCourseSubscribeDTO = {
/**
 * @description 课程介绍
 **/
courseIntro: string;
/**
 * @description 课程难度 难度级别：ENTRY:入门, BASE:基础,INTENSIFY:强化,ADVANCEMENT:进阶
 **/
courseLevel: string;
/**
 * @description 开课时间
 **/
courseTime: string;
/**
 * @description 员工id
 **/
employeeId: string;
/**
 * @description 员工名称
 **/
employeeName: string;
/**
 * @description 课程结束时间
 **/
endTime: string;
/**
 * @description 课程ID
 * @format int64
 **/
id: number;
isLimitTime: boolean;
/**
 * @description 预约时间限制 0：不限制
 * @format int64
 **/
limitTime: number;
/**
 * @description 课程名称
 **/
name: string;
/**
 * @description 开课人数要求
 * @format int64
 **/
numberLimit: number;
/**
 * @description 开课地点
 **/
place: string;
/**
 * @description 开课门店
 **/
shopName: string;
/**
 * @description 课程开始时间
 **/
startTime: string;
};
/**
 * @title UpdateMerchantDTO
 **/
export type ZmsxMerchantComponentsSchemasUpdateMerchantDTO = {
/**
 * @description 企业支付宝账号
 **/
alipayAccount: string;
/**
 * @description 银行卡卡号
 **/
bankAccount: string;
/**
 * @description 开户行支行
 **/
bankBranchName: string;
/**
 * @description 银行卡开户名
 **/
bankCardName: string;
/**
 * @description 开户行
 **/
bankName: string;
/**
 * @description 经营类目
 **/
category: string;
/**
 * @description 经营类目经营类目描述
 **/
categoryDesc: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 主键ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户营业执照编码
 **/
merchantLicenseNo: string;
/**
 * @description 商户营业执照
 **/
merchantLicensePic: string;
/**
 * @description 商户logo
 **/
merchantLogo: string;
/**
 * @description 商户全称名称
 **/
merchantName: string;
/**
 * @description 服务商类型 0 企业；1 个体工商户
 * @format int32
 **/
merchantType: number;
/**
 * @description 是否是对公账户
 * @format int32
 **/
pubAccount: number;
/**
 * @description 商户简称
 **/
shortName: string;
};
/**
 * @title UpdateShopExamplesDTO
 **/
export type ZmsxMerchantComponentsSchemasUpdateShopExamplesDTO = {
/**
 * @description 作者
 **/
authorName: string;
/**
 * @description 封面图
 **/
caseCover: string;
/**
 * @description 案例简介
 **/
caseIntro: string;
/**
 * @description 案例日期
 **/
caseTime: string;
/**
 * @description 案例ID
 * @format int64
 **/
id: number;
/**
 * @description 案例标题
 **/
title: string;
};
/**
 * @title UploadFilesVO
 **/
export type ZmsxMerchantComponentsSchemasUploadFilesVO = {
/**
 * @description cdn地址
 **/
cdnUrl: string;
/**
 * @description 图片名称
 **/
name: string;
};
/**
 * @title WidgetVO
 **/
export type ZmsxMerchantComponentsSchemasWidgetVO = {
/**
 * @description 是否隐藏
 **/
hide: boolean;
/**
 * @description 接口地址
 **/
interfaceAddress: string;
/**
 * @description 组件编码
 **/
widgetCode: string;
/**
 * @description 组件内容
 **/
widgetContent: {[x: string | number]: {[x: string | number]: any};
};
/**
 * @description 组件英文名
 **/
widgetEnName: string;
/**
 * @description 组件ID
 * @format int64
 **/
widgetId: number;
/**
 * @description 组件长度
 * @format double
 **/
widgetLength: number;
/**
 * @description 组件名称
 **/
widgetName: string;
/**
 * @description 组件数据源：INTERFACE 接口获取；DEFAULT_CONTENT  content字段初始化获取
 **/
widgetType: string;
/**
 * @description 组件宽度
 * @format double
 **/
widgetWidth: number;
};
/**
 * @title ZftCreateDTO
 **/
export type ZmsxMerchantComponentsSchemasZftCreateDTO = {
/**
 * @description 账号使用类型，01-对公，02-对私
 **/
bankAccountUsageType: string;
/**
 * @description 开户支行名
 **/
bankBranchName: string;
/**
 * @description 卡户名
 **/
bankCardName: string;
/**
 * @description 银行卡号
 **/
bankCardNo: string;
/**
 * @description 开户行所在地-市(传名称)
 **/
bankCityName: string;
/**
 * @description 开户银行Code
 **/
bankCode: string;
/**
 * @description 开户银行名称
 **/
bankName: string;
/**
 * @description 开户行所在地-省(传名称)
 **/
bankProvinceName: string;
/**
 * @description 商户类目code
 **/
category: string;
/**
 * @description 商户类目描述
 **/
categoryName: string;
/**
 * @description 类目资质要求证件照
 **/
industryQualificationPic: string;
/**
 * @description 类目资质要求类型
 **/
industryQualificationType: string;
/**
 * @description 直付通开通的服务
 **/
services: string[];
/**
 * @description 结算支付宝账号，如果选择了结算方式为支付宝，字段不能为空
 **/
settleAlipayAccount: string;
/**
 * @description 结算方式，可选值有 bankCard: 银行卡，alipayAccount: 支付宝账号
 **/
settleType: string;
/**
 * @description 开通直付通的店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title PageVO«AppCourseSubscribeDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_AppCourseSubscribeDetailVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasAppCourseSubscribeDetailVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppMerchantCourseVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_AppMerchantCourseVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasAppMerchantCourseVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppMerchantTeacherVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_AppMerchantTeacherVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasAppMerchantTeacherVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppPartnerUnifyShopPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_AppPartnerUnifyShopPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasAppPartnerUnifyShopPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppSafetyShopPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_AppSafetyShopPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasAppSafetyShopPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppShopExamplesVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_AppShopExamplesVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasAppShopExamplesVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppShopRedpkgVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_AppShopRedpkgVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasAppShopRedpkgVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppStagePayShopVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_AppStagePayShopVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasAppStagePayShopVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ConsoleMerchantVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ConsoleMerchantVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasConsoleMerchantVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ConsoleSafetyShopPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ConsoleSafetyShopPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasConsoleSafetyShopPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ConsoleStagePayShopPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ConsoleStagePayShopPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasConsoleStagePayShopPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«CourseSubPersonDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_CourseSubPersonDetailVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasCourseSubPersonDetailVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«CourseSubscribeDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_CourseSubscribeDetailVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasCourseSubscribeDetailVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«CustomerServiceVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_CustomerServiceVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasCustomerServiceVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«EmployeesVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_EmployeesVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasEmployeesVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«MerchantIconVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_MerchantIconVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasMerchantIconVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«MerchantPubTemplateVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_MerchantPubTemplateVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasMerchantPubTemplateVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«MerchantShopIndexVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_MerchantShopIndexVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasMerchantShopIndexVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«MerchantShopVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_MerchantShopVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasMerchantShopVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«MerchantTeacherVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_MerchantTeacherVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasMerchantTeacherVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«MerchantVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_MerchantVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasMerchantVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«OwnerSettledRecordVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_OwnerSettledRecordVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasOwnerSettledRecordVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PartnerShopPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_PartnerShopPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasPartnerShopPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PartnerUnifyShopVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_PartnerUnifyShopVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasPartnerUnifyShopVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«RewardsShopPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_RewardsShopPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasRewardsShopPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«RoleInfoVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_RoleInfoVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasRoleInfoVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«SafetyShopPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_SafetyShopPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasSafetyShopPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ShopAppletVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ShopAppletVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasShopAppletVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ShopBalanceFlowVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ShopBalanceFlowVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasShopBalanceFlowVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ShopExamplesVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ShopExamplesVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasShopExamplesVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ShopItemPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ShopItemPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasShopItemPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ShopLeadsVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ShopLeadsVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasShopLeadsVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ShopTagsPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_ShopTagsPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasShopTagsPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«StagePayIncomeFlowVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_StagePayIncomeFlowVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasStagePayIncomeFlowVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«UnifyShopPageVO»
 **/
export type ZmsxMerchantComponentsSchemasPageVO_UnifyShopPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMerchantComponentsSchemasUnifyShopPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«AppCourseSubscribeDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppCourseSubscribeDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppCourseSubscribeDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppLoginEmployeesVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppLoginEmployeesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppLoginEmployeesVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppSafetyShopDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppSafetyShopDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppSafetyShopDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppShopIntroduceDetailsVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppShopIntroduceDetailsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppShopIntroduceDetailsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppShopRedpkgDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppShopRedpkgDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppShopRedpkgDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppShopVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppShopVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppTeacherVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppTeacherVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppTeacherVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppTemplateVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppTemplateVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppTemplateVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppletTemplateVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_AppletTemplateVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppletTemplateVO;
msg: string;
success: boolean;
};
/**
 * @title Result«EmployeeDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_EmployeeDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasEmployeeDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«IDCardOcrVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_IDCardOcrVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasIDCardOcrVO;
msg: string;
success: boolean;
};
/**
 * @title Result«LicenseOcrVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_LicenseOcrVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasLicenseOcrVO;
msg: string;
success: boolean;
};
/**
 * @title Result«List«AppSafetyShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_AppSafetyShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppSafetyShopPageVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«AppShopVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_AppShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasAppShopVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«CityTreeVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_CityTreeVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasCityTreeVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«CityVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_CityVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasCityVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«ConsoleMerchantShopVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_ConsoleMerchantShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasConsoleMerchantShopVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«ConsoleMerchantVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_ConsoleMerchantVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasConsoleMerchantVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«EmpShopInfoVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_EmpShopInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasEmpShopInfoVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«EmployeesVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_EmployeesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasEmployeesVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«GoodsMerchantShopVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_GoodsMerchantShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasGoodsMerchantShopVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«LastAccessMerchantVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_LastAccessMerchantVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasLastAccessMerchantVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«MerchantPubTemplateVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_MerchantPubTemplateVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantPubTemplateVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«MerchantShopIndexVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_MerchantShopIndexVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantShopIndexVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«MerchantShopVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_MerchantShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantShopVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«RoleInfoVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_RoleInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasRoleInfoVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«UploadFilesVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_UploadFilesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasUploadFilesVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«string»»
 **/
export type ZmsxMerchantComponentsSchemasResult_List_string_ = {
/**
 * @format int32
 **/
code: number;
data: string[];
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantDetailsVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantDetailsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantDetailsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantLoginInfo»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantLoginInfo_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantLoginInfo;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantPubTemplateVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantPubTemplateVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantPubTemplateVO;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantShopAppletVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantShopAppletVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantShopAppletVO;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantShopDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantShopDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantShopDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantShopDetailsVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantShopDetailsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantShopDetailsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantShopStageVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantShopStageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantShopStageVO;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantShopStatusVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantShopStatusVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantShopStatusVO;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantShopZftVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantShopZftVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantShopZftVO;
msg: string;
success: boolean;
};
/**
 * @title Result«MerchantTeacherVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_MerchantTeacherVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasMerchantTeacherVO;
msg: string;
success: boolean;
};
/**
 * @title Result«OwnerSettledConfigVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_OwnerSettledConfigVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasOwnerSettledConfigVO;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppCourseSubscribeDetailVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_AppCourseSubscribeDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_AppCourseSubscribeDetailVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppMerchantCourseVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_AppMerchantCourseVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_AppMerchantCourseVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppMerchantTeacherVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_AppMerchantTeacherVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_AppMerchantTeacherVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppPartnerUnifyShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_AppPartnerUnifyShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_AppPartnerUnifyShopPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppSafetyShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_AppSafetyShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_AppSafetyShopPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppShopExamplesVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_AppShopExamplesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_AppShopExamplesVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppShopRedpkgVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_AppShopRedpkgVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_AppShopRedpkgVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppStagePayShopVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_AppStagePayShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_AppStagePayShopVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ConsoleMerchantVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ConsoleMerchantVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ConsoleMerchantVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ConsoleSafetyShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ConsoleSafetyShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ConsoleSafetyShopPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ConsoleStagePayShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ConsoleStagePayShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ConsoleStagePayShopPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«CourseSubPersonDetailVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_CourseSubPersonDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_CourseSubPersonDetailVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«CourseSubscribeDetailVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_CourseSubscribeDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_CourseSubscribeDetailVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«CustomerServiceVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_CustomerServiceVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_CustomerServiceVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«EmployeesVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_EmployeesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_EmployeesVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«MerchantIconVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_MerchantIconVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_MerchantIconVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«MerchantPubTemplateVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_MerchantPubTemplateVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_MerchantPubTemplateVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«MerchantShopIndexVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_MerchantShopIndexVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_MerchantShopIndexVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«MerchantShopVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_MerchantShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_MerchantShopVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«MerchantTeacherVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_MerchantTeacherVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_MerchantTeacherVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«MerchantVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_MerchantVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_MerchantVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«OwnerSettledRecordVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_OwnerSettledRecordVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_OwnerSettledRecordVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«PartnerShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_PartnerShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_PartnerShopPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«PartnerUnifyShopVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_PartnerUnifyShopVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_PartnerUnifyShopVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«RewardsShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_RewardsShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_RewardsShopPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«RoleInfoVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_RoleInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_RoleInfoVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«SafetyShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_SafetyShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_SafetyShopPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ShopAppletVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ShopAppletVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ShopAppletVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ShopBalanceFlowVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ShopBalanceFlowVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ShopBalanceFlowVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ShopExamplesVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ShopExamplesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ShopExamplesVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ShopItemPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ShopItemPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ShopItemPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ShopLeadsVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ShopLeadsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ShopLeadsVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ShopTagsPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_ShopTagsPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_ShopTagsPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«UnifyShopPageVO»»
 **/
export type ZmsxMerchantComponentsSchemasResult_PageVO_UnifyShopPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasPageVO_UnifyShopPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«ServiceIconsVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_ServiceIconsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasServiceIconsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«SettledMerchantStatusVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_SettledMerchantStatusVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasSettledMerchantStatusVO;
msg: string;
success: boolean;
};
/**
 * @title Result«SettledRecordDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_SettledRecordDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasSettledRecordDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«ShopBalanceAccountVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_ShopBalanceAccountVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasShopBalanceAccountVO;
msg: string;
success: boolean;
};
/**
 * @title Result«ShopExamplesDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_ShopExamplesDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasShopExamplesDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«ShopIntroduceDetailsVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_ShopIntroduceDetailsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasShopIntroduceDetailsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«ShopLeadsVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_ShopLeadsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasShopLeadsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«StagePayIncomeDetailVO»
 **/
export type ZmsxMerchantComponentsSchemasResult_StagePayIncomeDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMerchantComponentsSchemasStagePayIncomeDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxMerchantComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
/**
 * @title Result«int»
 **/
export type ZmsxMerchantComponentsSchemasResult_int_ = {
/**
 * @format int32
 **/
code: number;
/**
 * @format int32
 **/
data: number;
msg: string;
success: boolean;
};
/**
 * @title Result«string»
 **/
export type ZmsxMerchantComponentsSchemasResult_string_ = {
/**
 * @format int32
 **/
code: number;
data: string;
msg: string;
success: boolean;
};
export interface PathsZmsxMerchant{'/merchant/b/appM/course/page/appMerchantSubCourses': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasAppMerchantSubCoursePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppMerchantCourseVO_;
};
};
'/merchant/b/applet/shop/balance/consume': {post: {
param:{
/**
 * @description amount
 **/
body: number;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/applet/shop/balance/flow/page': {post: {
param:{
/**
 * @description dto
 **/
body: ZmsxMerchantComponentsSchemasAppMShopBalanceFlowQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ShopBalanceFlowVO_;
};
};
'/merchant/b/applet/shop/balance/get': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_ShopBalanceAccountVO_;
};
};
'/merchant/b/applet/shop/{shopId}/balance/consume': {post: {
param:{query: {
/**
 * @description amount
 * @format double
 **/
amount?: number;
};
path: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/applet/shop/{shopId}/balance/flow/page': {post: {
param:{path: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
/**
 * @description dto
 **/
body: ZmsxMerchantComponentsSchemasAppMShopBalanceFlowQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ShopBalanceFlowVO_;
};
};
'/merchant/b/applet/shop/{shopId}/balance/get': {get: {
param:{path: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_ShopBalanceAccountVO_;
};
};
'/merchant/b/course/courseNames': {get: {
param:{query: {
/**
 * @description shopName
 **/
shopName?: string;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_string_;
};
};
'/merchant/b/course/deleted/{id}': {delete: {
param:{path: {
/**
 * @description id
 * @format int64
 **/
id: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/course/page/courseSub': {post: {
param:{
/**
 * @description courseSubscribePageDTO
 **/
body: ZmsxMerchantComponentsSchemasCourseSubscribePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_CourseSubscribeDetailVO_;
};
};
'/merchant/b/course/page/courseSubPerson': {post: {
param:{
/**
 * @description courseSubPersonPageDTO
 **/
body: ZmsxMerchantComponentsSchemasCourseSubPersonPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_CourseSubPersonDetailVO_;
};
};
'/merchant/b/course/save': {put: {
param:{
/**
 * @description createCourseSubscribeDTO
 **/
body: ZmsxMerchantComponentsSchemasCreateCourseSubscribeDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/course/shopCancelCourse': {post: {
param:{
/**
 * @description appCourseSubPersonDTO
 **/
body: ZmsxMerchantComponentsSchemasAppCourseSubPersonDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/course/update': {put: {
param:{
/**
 * @description updateCourseSubscribeDTO
 **/
body: ZmsxMerchantComponentsSchemasUpdateCourseSubscribeDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/emp/empInfo': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppLoginEmployeesVO_;
};
};
'/merchant/b/emp/resetPassword': {put: {
param:{
/**
 * @description resetPasswordDTO
 **/
body: ZmsxMerchantComponentsSchemasResetPasswordDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/emp/shops': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_EmpShopInfoVO_;
};
};
'/merchant/b/employee': {get: {
param:{query: {
/**
 * @description empId
 * @format int64
 **/
empId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_EmployeeDetailVO_;
};
};
'/merchant/b/employee/change': {put: {
param:{
/**
 * @description enableDTO
 **/
body: ZmsxMerchantComponentsSchemasChangeEmployeeEnableDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/employee/edit': {put: {
param:{
/**
 * @description employeesDTO
 **/
body: ZmsxMerchantComponentsSchemasEmployeesDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/employee/employees': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_EmployeesVO_;
};
};
'/merchant/b/employee/page': {post: {
param:{
/**
 * @description employeesPageDTO
 **/
body: ZmsxMerchantComponentsSchemasEmployeesPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_EmployeesVO_;
};
};
'/merchant/b/info': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantLoginInfo_;
};
};
'/merchant/b/info/courseSubLimitNumber': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_int_;
};
};
'/merchant/b/info/detail/stagePayIncome': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasStagePayIncomeFlowPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_StagePayIncomeDetailVO_;
};
};
'/merchant/b/info/details': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopDetailVO_;
};
};
'/merchant/b/info/export/settledAmountFlow': {get: {
param:{query: {
/**
 * @description recordId
 * @format int64
 **/
recordId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/info/export/settledRecord': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasOwnerSettledRecordPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/info/export/stagePayIncomeFlow': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasStagePayIncomeFlowPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/info/index/lastVisit': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_MerchantShopIndexVO_;
};
};
'/merchant/b/info/index/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasShopPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_MerchantShopIndexVO_;
};
};
'/merchant/b/info/list': {post: {
param:{
/**
 * @description merchantAbilityShopQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasMerchantAbilityShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_MerchantShopVO_;
};
};
'/merchant/b/info/list/antShop': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_MerchantShopVO_;
};
};
'/merchant/b/info/page/customerService': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasCustomerServicePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_CustomerServiceVO_;
};
};
'/merchant/b/info/page/ownerSettledRecord': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasOwnerSettledRecordPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_OwnerSettledRecordVO_;
};
};
'/merchant/b/info/page/settledAmountFlow': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasStagePayIncomeFlowPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_SettledRecordDetailVO_;
};
};
'/merchant/b/info/page/shopItems': {post: {
param:{
/**
 * @description shopItemQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasShopItemQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ShopItemPageVO_;
};
};
'/merchant/b/info/page/shopTags': {post: {
param:{
/**
 * @description shopTagsPageDTO
 **/
body: ZmsxMerchantComponentsSchemasShopTagsPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ShopTagsPageVO_;
};
};
'/merchant/b/info/resetPassword': {put: {
param:{
/**
 * @description resetPasswordDTO
 **/
body: ZmsxMerchantComponentsSchemasResetPasswordDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/info/save/shopTags': {post: {
param:{
/**
 * @description shopTagsDTO
 **/
body: ZmsxMerchantComponentsSchemasShopTagsDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/info/shopStatus': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopStatusVO_;
};
};
'/merchant/b/info/shops': {post: {
param:{
/**
 * @description merchantShop
 **/
body: ZmsxMerchantComponentsSchemasGoodsMerchantShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_GoodsMerchantShopVO_;
};
};
'/merchant/b/info/updateCustomerService': {put: {
param:{
/**
 * @description customerServiceDTO
 **/
body: ZmsxMerchantComponentsSchemasCustomerServiceDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/info/updateMerchantSubNumber': {put: {
param:{
/**
 * @description courseLimitNumberDTO
 **/
body: ZmsxMerchantComponentsSchemasCourseLimitNumberDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/introduce': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_ShopIntroduceDetailsVO_;
};
};
'/merchant/b/introduce/edit': {put: {
param:{
/**
 * @description shopIntroduceDTO
 **/
body: ZmsxMerchantComponentsSchemasShopIntroduceDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/introduce/icons': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_ServiceIconsVO_;
};
};
'/merchant/b/role': {post: {
param:{
/**
 * @description roleInfoDTO
 **/
body: ZmsxMerchantComponentsSchemasRoleInfoDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/role/delete/{roleId}': {post: {
param:{path: {
/**
 * @description roleId
 * @format int64
 **/
roleId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/role/list': {post: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_RoleInfoVO_;
};
};
'/merchant/b/role/page': {post: {
param:{
/**
 * @description rolePageDTO
 **/
body: ZmsxMerchantComponentsSchemasRolePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_RoleInfoVO_;
};
};
'/merchant/b/role/switchEnable': {post: {
param:{
/**
 * @description roleSwitchDTO
 **/
body: ZmsxMerchantComponentsSchemasRoleSwitchDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/shopExamples/deleted/{id}': {delete: {
param:{path: {
/**
 * @description id
 * @format int64
 **/
id: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/shopExamples/details/{id}': {get: {
param:{path: {
/**
 * @description id
 * @format int64
 **/
id: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_ShopExamplesDetailVO_;
};
};
'/merchant/b/shopExamples/page': {post: {
param:{
/**
 * @description shopExamplesPageDTO
 **/
body: ZmsxMerchantComponentsSchemasShopExamplesPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ShopExamplesVO_;
};
};
'/merchant/b/shopExamples/save': {put: {
param:{
/**
 * @description createShopExamplesDTO
 **/
body: ZmsxMerchantComponentsSchemasCreateShopExamplesDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/shopExamples/update': {put: {
param:{
/**
 * @description updateShopExamplesDTO
 **/
body: ZmsxMerchantComponentsSchemasUpdateShopExamplesDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/teacher': {delete: {
param:{query: {
/**
 * @description teacherId
 * @format int64
 **/
teacherId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/teacher/detail': {get: {
param:{query: {
/**
 * @description teacherId
 * @format int64
 **/
teacherId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantTeacherVO_;
};
};
'/merchant/b/teacher/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasTeacherPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_MerchantTeacherVO_;
};
};
'/merchant/b/teacher/save': {put: {
param:{
/**
 * @description teacherDTO
 **/
body: ZmsxMerchantComponentsSchemasMerchantTeacherDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/teacher/update': {put: {
param:{
/**
 * @description teacherDTO
 **/
body: ZmsxMerchantComponentsSchemasMerchantTeacherDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/b/template/detail': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppletTemplateVO_;
};
};
'/merchant/b/template/edit': {put: {
param:{
/**
 * @description widgetDTO
 **/
body: ZmsxMerchantComponentsSchemasAppletTemplateWidgetDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/c/course/cancelCourse': {post: {
param:{
/**
 * @description appCourseSubPersonDTO
 **/
body: ZmsxMerchantComponentsSchemasAppCourseSubPersonDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/c/course/courseDetails': {post: {
param:{
/**
 * @description appCourseSubPersonDTO
 **/
body: ZmsxMerchantComponentsSchemasAppCourseSubPersonDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppCourseSubscribeDetailVO_;
};
};
'/merchant/c/course/page/courseSub': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasAppCourseSubscribePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppCourseSubscribeDetailVO_;
};
};
'/merchant/c/course/page/courseSubPerson': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasAppCourseSubscribePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppCourseSubscribeDetailVO_;
};
};
'/merchant/c/course/subCourse': {post: {
param:{
/**
 * @description appCourseSubPersonDTO
 **/
body: ZmsxMerchantComponentsSchemasAppCourseSubPersonDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/c/partner/shop/claim': {post: {
param:{
/**
 * @description claimDTO
 **/
body: ZmsxMerchantComponentsSchemasShopClaimDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/c/partner/shop/enter': {post: {
param:{
/**
 * @description enterDTO
 **/
body: ZmsxMerchantComponentsSchemasShopEnterDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/c/partner/shop/page': {post: {
param:{
/**
 * @description shopQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasUnifyShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppPartnerUnifyShopPageVO_;
};
};
'/merchant/c/partner/shop/page/partnerStagePayShop': {post: {
param:{
/**
 * @description shopQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasUnifyShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppStagePayShopVO_;
};
};
'/merchant/c/redpkg/shop/detail/shopRedpkg': {post: {
param:{
/**
 * @description unifyShopDTO
 **/
body: ZmsxMerchantComponentsSchemasUnifyShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppShopRedpkgDetailVO_;
};
};
'/merchant/c/redpkg/shop/page/shopRedpkgs': {post: {
param:{
/**
 * @description unifyShopQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasUnifyShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppShopRedpkgVO_;
};
};
'/merchant/c/safety/shop/detail': {post: {
param:{
/**
 * @description queryDTO
 **/
body: ZmsxMerchantComponentsSchemasAppSafetyShopDetailQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppSafetyShopDetailVO_;
};
};
'/merchant/c/safety/shop/page/safetyShop': {post: {
param:{
/**
 * @description shopQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasUnifyShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppSafetyShopPageVO_;
};
};
'/merchant/c/safety/shop/safetyShops': {post: {
param:{
/**
 * @description shopDTO
 **/
body: ZmsxMerchantComponentsSchemasSafetyShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_AppSafetyShopPageVO_;
};
};
'/merchant/c/shop/examples': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasShopExamplesPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppShopExamplesVO_;
};
};
'/merchant/c/shopInfo/multipleShops': {post: {
param:{
/**
 * @description shopDTO
 **/
body: ZmsxMerchantComponentsSchemasMultipleShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_AppShopVO_;
};
};
'/merchant/c/shopInfo/shopInfo': {get: {
param:{query: {
/**
 * @description latitude
 * @format double
 **/
latitude?: number;
/**
 * @description longitude
 * @format double
 **/
longitude?: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppShopVO_;
};
};
'/merchant/c/unify/shop/claim': {post: {
param:{
/**
 * @description claimDTO
 **/
body: ZmsxMerchantComponentsSchemasShopClaimDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/c/unify/shop/enter': {post: {
param:{
/**
 * @description enterDTO
 **/
body: ZmsxMerchantComponentsSchemasShopEnterDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/c/unify/shop/page': {post: {
param:{
/**
 * @description shopQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasUnifyShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_UnifyShopPageVO_;
};
};
'/merchant/c/widgets': {get: {
param:{query: {
/**
 * @description teacherId
 * @format int64
 **/
teacherId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppTeacherVO_;
};
};
'/merchant/c/widgets/introduce': {get: {
param:{query: {
/**
 * @description size
 * @format int32
 **/
size?: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppShopIntroduceDetailsVO_;
};
};
'/merchant/c/widgets/teachers': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasTeacherPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_AppMerchantTeacherVO_;
};
};
'/merchant/c/widgets/templateDetails': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_AppTemplateVO_;
};
};
'/merchant/console/icon/info': {delete: {
param:{query: {
/**
 * @description iconId
 * @format int64
 **/
iconId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/icon/info/iconUploads': {put: {
param:{
/**
 * @description icons
 **/
body: ZmsxMerchantComponentsSchemasPubIconsDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/icon/info/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasPubIconPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_MerchantIconVO_;
};
};
'/merchant/console/merchant/info/audit': {put: {
param:{
/**
 * @description merchantDTO
 **/
body: ZmsxMerchantComponentsSchemasAuditMerchantDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/merchant/info/change/enable': {put: {
param:{
/**
 * @description enableDTO
 **/
body: ZmsxMerchantComponentsSchemasChangeMerchantEnableDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/merchant/info/deleted/{merchantId}': {delete: {
param:{path: {
/**
 * @description merchantId
 * @format int64
 **/
merchantId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/merchant/info/detail/{merchantId}': {get: {
param:{path: {
/**
 * @description merchantId
 * @format int64
 **/
merchantId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantDetailsVO_;
};
};
'/merchant/console/merchant/info/list': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_ConsoleMerchantVO_;
};
};
'/merchant/console/merchant/info/page': {post: {
param:{
/**
 * @description merchantPageDTO
 **/
body: ZmsxMerchantComponentsSchemasMerchantPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ConsoleMerchantVO_;
};
};
'/merchant/console/merchant/info/withAudit': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_int_;
};
};
'/merchant/console/merchantShop/info/changeShopShowStatus': {post: {
param:{
/**
 * @description changeShopShowStatusDTO
 **/
body: ZmsxMerchantComponentsSchemasChangeShopShowStatusDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/merchantShop/info/list': {post: {
param:{
/**
 * @description merchantPageDTO
 **/
body: ZmsxMerchantComponentsSchemasMerchantShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_ConsoleMerchantShopVO_;
};
};
'/merchant/console/merchantShop/info/page/rewardsShop': {post: {
param:{
/**
 * @description rewardsShopQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasRewardsShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_RewardsShopPageVO_;
};
};
'/merchant/console/merchantShop/info/page/safetyShop': {post: {
param:{
/**
 * @description shopPageDTO
 **/
body: ZmsxMerchantComponentsSchemasSafetyShopPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ConsoleSafetyShopPageVO_;
};
};
'/merchant/console/merchantShop/info/page/stagePayShop': {post: {
param:{
/**
 * @description shopPageDTO
 **/
body: ZmsxMerchantComponentsSchemasStagePayShopPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ConsoleStagePayShopPageVO_;
};
};
'/merchant/console/merchantShop/info/sendRewards': {post: {
param:{
/**
 * @description baseEntityIdDTO
 **/
body: ZmsxMerchantComponentsSchemasBaseEntityIdDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/merchantShop/info/setSubsidyRule': {post: {
param:{
/**
 * @description setSubsidyRulesDTO
 **/
body: ZmsxMerchantComponentsSchemasSetSubsidyRulesDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/template/changeEnable': {put: {
param:{
/**
 * @description statusDTO
 **/
body: ZmsxMerchantComponentsSchemasChangeEnableStatusDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/template/detail': {get: {
param:{query: {
/**
 * @description templateId
 * @format int64
 **/
templateId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantPubTemplateVO_;
};
};
'/merchant/console/template/edit': {put: {
param:{
/**
 * @description editVO
 **/
body: ZmsxMerchantComponentsSchemasPubTemplateEditDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/template/page': {post: {
param:{
/**
 * @description templateDTO
 **/
body: ZmsxMerchantComponentsSchemasMerchantPubTemplateDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_MerchantPubTemplateVO_;
};
};
'/merchant/console/unify/shop/excel': {post: {
param:{
/**
 * @description file
 **/
body: string;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/console/unify/shop/sync': {post: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/dict/area': {get: {
param:{query: {
/**
 * @description cityCode
 * @format int32
 **/
cityCode: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_CityVO_;
};
};
'/merchant/dict/city': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_CityTreeVO_;
};
};
'/merchant/file/idcard/ocr/file': {post: {
param:{
/**
 * @description file
 **/
body: string;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_IDCardOcrVO_;
};
};
'/merchant/file/idcard/ocr/path': {post: {
param:{
/**
 * @description uploadDTO
 **/
body: ZmsxMerchantComponentsSchemasFileUploadDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_IDCardOcrVO_;
};
};
'/merchant/file/license/ocr/file': {post: {
param:{
/**
 * @description file
 **/
body: string;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_LicenseOcrVO_;
};
};
'/merchant/file/license/ocr/path': {post: {
param:{
/**
 * @description fileUploadDTO
 **/
body: ZmsxMerchantComponentsSchemasFileUploadDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_LicenseOcrVO_;
};
};
'/merchant/file/upload': {post: {
param:{
/**
 * @description file
 **/
body: string;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_string_;
};
};
'/merchant/file/uploads': {post: {
param:{
/**
 * @description files
 **/
body: string[];
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_UploadFilesVO_;
};
};
'/merchant/open/reportMerchant': {post: {
param:{
/**
 * @description openApiDTO
 **/
body: ZmsxMerchantComponentsSchemasOpenApiDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_string_;
};
};
'/merchant/open/shop/upload': {post: {
param:{
/**
 * @description openApiDTO
 **/
body: ZmsxMerchantComponentsSchemasOpenApiDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/open/status': {post: {
param:{
/**
 * @description openApiDTO
 **/
body: ZmsxMerchantComponentsSchemasOpenApiDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_SettledMerchantStatusVO_;
};
};
'/merchant/open/status/change': {post: {
param:{
/**
 * @description openApiDTO
 **/
body: ZmsxMerchantComponentsSchemasOpenApiDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/applet/appletInfo': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopAppletVO_;
};
};
'/merchant/p/applet/applyFaceToFace': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/applet/continue/create': {post: {
param:{
/**
 * @description continueCreateDTO
 **/
body: ZmsxMerchantComponentsSchemasContinueCreateDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/applet/create': {post: {
param:{
/**
 * @description shopAppletDTO
 **/
body: ZmsxMerchantComponentsSchemasShopAppletDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/applet/createStage': {post: {
param:{
/**
 * @description stageCreateDTO
 **/
body: ZmsxMerchantComponentsSchemasStageCreateDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/applet/createZftMerchant': {post: {
param:{
/**
 * @description zftCreateDTO
 **/
body: ZmsxMerchantComponentsSchemasZftCreateDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/applet/partner/applyFaceToFace': {get: {
param:{query: {
/**
 * @description partnerId
 * @format int64
 **/
partnerId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/applet/partner/create': {post: {
param:{
/**
 * @description shopAppletDTO
 **/
body: ZmsxMerchantComponentsSchemasShopAppletDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/applet/shopZft': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopZftVO_;
};
};
'/merchant/p/applet/stagePayInfo': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopStageVO_;
};
};
'/merchant/p/info/detail/{merchantId}': {get: {
param:{path: {
/**
 * @description merchantId
 * @format int64
 **/
merchantId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantDetailsVO_;
};
};
'/merchant/p/info/lastAccess': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_LastAccessMerchantVO_;
};
};
'/merchant/p/info/openAbility': {post: {
param:{
/**
 * @description openAbilityDTO
 **/
body: ZmsxMerchantComponentsSchemasMerchantOpenAbilityDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/info/page': {post: {
param:{
/**
 * @description merchantPageDTO
 **/
body: ZmsxMerchantComponentsSchemasMerchantPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_MerchantVO_;
};
};
'/merchant/p/info/save': {put: {
param:{
/**
 * @description createMerchant
 **/
body: ZmsxMerchantComponentsSchemasCreateMerchantDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/info/update': {put: {
param:{
/**
 * @description updateMerchantDTO
 **/
body: ZmsxMerchantComponentsSchemasUpdateMerchantDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop': {get: {
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_MerchantPubTemplateVO_;
};
};
'/merchant/p/shop/antShop/close/{shopId}': {post: {
param:{path: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/antShop/open/{shopId}': {post: {
param:{path: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/applet/page': {post: {
param:{
/**
 * @description shopAppletPageDTO
 **/
body: ZmsxMerchantComponentsSchemasShopAppletPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ShopAppletVO_;
};
};
'/merchant/p/shop/changeEnable': {put: {
param:{
/**
 * @description changeShopEnableDTO
 **/
body: ZmsxMerchantComponentsSchemasChangeShopEnableDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/changeShopShowStatus': {post: {
param:{
/**
 * @description changeShopShowStatusDTO
 **/
body: ZmsxMerchantComponentsSchemasChangeShopShowStatusDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/deleted/{shopId}': {delete: {
param:{path: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/detail/ownerSettledConfig': {post: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_OwnerSettledConfigVO_;
};
};
'/merchant/p/shop/details/{shopId}': {get: {
param:{path: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopDetailsVO_;
};
};
'/merchant/p/shop/list/merchantShop': {get: {
param:{query: {
/**
 * @description joinShopType
 **/
joinShopType: string;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_MerchantShopVO_;
};
};
'/merchant/p/shop/listAbilityShop': {post: {
param:{
/**
 * @description abilityShopQueryDTO
 **/
body: ZmsxMerchantComponentsSchemasAbilityShopQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_List_MerchantShopVO_;
};
};
'/merchant/p/shop/openAbility': {post: {
param:{
/**
 * @description openStagePayDTO
 **/
body: ZmsxMerchantComponentsSchemasOpenStagePayDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/openSafetyPay': {post: {
param:{
/**
 * @description openSafetyPayDTO
 **/
body: ZmsxMerchantComponentsSchemasOpenSafetyPayDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/openStagePayShop': {post: {
param:{
/**
 * @description openStagePayShopDTO
 **/
body: ZmsxMerchantComponentsSchemasOpenStagePayShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasShopPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_PartnerShopPageVO_;
};
};
'/merchant/p/shop/page/merchantShop': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasShopPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_MerchantShopVO_;
};
};
'/merchant/p/shop/page/safetyShop': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasShopPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_SafetyShopPageVO_;
};
};
'/merchant/p/shop/save': {put: {
param:{
/**
 * @description createMerchantShopDTO
 **/
body: ZmsxMerchantComponentsSchemasCreateMerchantShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopDetailsVO_;
};
};
'/merchant/p/shop/save/ownerSettledConfig': {post: {
param:{
/**
 * @description setOwnerSettledConfigDTO
 **/
body: ZmsxMerchantComponentsSchemasSetOwnerSettledConfigDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/saveChain': {put: {
param:{
/**
 * @description chainMerchantShopDTO
 **/
body: ZmsxMerchantComponentsSchemasChainMerchantShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopDetailsVO_;
};
};
'/merchant/p/shop/shopStatus': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_MerchantShopStatusVO_;
};
};
'/merchant/p/shop/update': {put: {
param:{
/**
 * @description upadateMerchantShopDTO
 **/
body: ZmsxMerchantComponentsSchemasUpadateMerchantShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/shop/updateChain': {put: {
param:{
/**
 * @description chainMerchantShopDTO
 **/
body: ZmsxMerchantComponentsSchemasChainMerchantShopDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/unifyShop/detail/shopLead': {get: {
param:{query: {
/**
 * @description shopLeadsId
 * @format int64
 **/
shopLeadsId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_ShopLeadsVO_;
};
};
'/merchant/p/unifyShop/excel': {post: {
param:{
/**
 * @description file
 **/
body: string;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_Void_;
};
};
'/merchant/p/unifyShop/page/shopLeads': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_ShopLeadsVO_;
};
};
'/merchant/p/unifyShopPage': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxMerchantComponentsSchemasUnifyPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMerchantComponentsSchemasResult_PageVO_PartnerUnifyShopVO_;
};
};
}

/**
 * @title ChangeEmployeeEnableDTO
 **/
export type ZmsxPlatformComponentsSchemasChangeEmployeeEnableDTO = {
/**
 * @description 员工ID
 * @format int64
 **/
empId: number;
/**
 * @description 启用状态 1 启用；0 未启用
 * @format int32
 **/
enable?: number;
};
/**
 * @title EmployeeDetailVO
 **/
export type ZmsxPlatformComponentsSchemasEmployeeDetailVO = {
/**
 * @description 账号类型：PLATFORM 商户主账号；EMPLOYEE 门店员工
 **/
accountType: string;
/**
 * @description 员工ID 有则修改 无则新增
 * @format int64
 **/
empId: number;
/**
 * @description 员工简介
 **/
intro: string;
/**
 * @description 员工登录名
 **/
loginName: string;
/**
 * @description 员工名称
 **/
name: string;
/**
 * @description 员工头像
 **/
photo: string;
/**
 * @description 角色列表
 **/
roleList: string[];
/**
 * @description 角色列表
 **/
rolesStr: string;
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex: string;
};
/**
 * @title EmployeesDTO
 **/
export type ZmsxPlatformComponentsSchemasEmployeesDTO = {
/**
 * @description 员工ID 有则修改 无则新增
 * @format int64
 **/
empId?: number;
/**
 * @description 员工简介
 **/
intro?: string;
/**
 * @description 登录用户名
 **/
loginName?: string;
/**
 * @description 员工名称
 **/
name: string;
/**
 * @description 登录密码
 **/
password?: string;
/**
 * @description 员工头像
 **/
photo?: string;
/**
 * @description 员工角色,使用roleNo的数组集合，不要用roleId
 **/
roleList: string[];
/**
 * @description 性别 MAN 男；WOMAN 女
 **/
sex?: string;
};
/**
 * @title EmployeesPageDTO
 **/
export type ZmsxPlatformComponentsSchemasEmployeesPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 员工名称
 **/
empName?: string;
/**
 * @description 状态 0 停用； 1 启用
 * @format int32
 **/
enable?: number;
/**
 * @description 登录用户名
 **/
loginName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 权限编码
 **/
roleNo?: string;
};
/**
 * @title EmployeesVO
 **/
export type ZmsxPlatformComponentsSchemasEmployeesVO = {
/**
 * @description 账号类型：PLATFORM 商户主账号；EMPLOYEE 门店员工
 **/
accountType: string;
/**
 * @description 是否是管理员，true: 是，false: 不是
 **/
adminFlag: boolean;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 创建人
 **/
createdBy: string;
/**
 * @description 员工ID
 * @format int64
 **/
empId: number;
/**
 * @description 员工编码
 **/
empNo: string;
/**
 * @description 状态 0 停用；1 启用
 * @format int32
 **/
enable: number;
/**
 * @description 员工简介
 **/
intro: string;
/**
 * @description 登录用户名
 **/
loginName: string;
/**
 * @description 员工名称
 **/
name: string;
/**
 * @description 员工手机号
 **/
phone: string;
/**
 * @description 员工头像
 **/
photo: string;
/**
 * @description 员工角色编码
 **/
roleListJson: string;
/**
 * @description 员工角色
 **/
roles: string;
/**
 * @description 账号类型：PLATFORM 商户主账号；EMPLOYEE 门店员工性别 MAN 男；WOMAN 女
 **/
sex: string;
};
/**
 * @title PlatformDetailVO
 **/
export type ZmsxPlatformComponentsSchemasPlatformDetailVO = {
/**
 * @format int64
 **/
accountId: number;
adminFlag: boolean;
allowFunctions: string[];
employeeLoginName: string;
employeeName: string;
employeePhoto: string;
/**
 * @format int32
 **/
enable: number;
/**
 * @format int64
 **/
id: number;
phone: string;
/**
 * @format int32
 **/
role: number;
roleOperateJson: string[];
};
/**
 * @title RoleInfoDTO
 **/
export type ZmsxPlatformComponentsSchemasRoleInfoDTO = {
/**
 * @description 服务商后台功能列表
 **/
functionList: string[];
/**
 * @description 服务商后台权限列表
 **/
operateList: string[];
/**
 * @description 角色描述
 **/
roleDesc: string;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
/**
 * @description 角色名称
 **/
roleName: string;
};
/**
 * @title RoleInfoVO
 **/
export type ZmsxPlatformComponentsSchemasRoleInfoVO = {
/**
 * @description 角色功能列表
 **/
functionList: string[];
/**
 * @description 操作权限列表
 **/
operateList: string[];
/**
 * @description 角色描述
 **/
roleDesc: string;
/**
 * @description 状态，启用/停用
 **/
roleEnable: boolean;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
/**
 * @description 角色名称
 **/
roleName: string;
/**
 * @description 角色编号
 **/
roleNo: string;
/**
 * @description 角色类型,INIT: 预设，DEFINED: 自定义
 **/
roleType: string;
};
/**
 * @title RolePageDTO
 **/
export type ZmsxPlatformComponentsSchemasRolePageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 角色描述
 **/
roleDesc?: string;
/**
 * @description 角色状态，true: 启用，false: 禁用
 **/
roleEnable?: boolean;
/**
 * @description 角色名称
 **/
roleName?: string;
};
/**
 * @title RoleSwitchDTO
 **/
export type ZmsxPlatformComponentsSchemasRoleSwitchDTO = {
/**
 * @description 状态，true: 启用，false: 禁用
 **/
roleEnable: boolean;
/**
 * @description 角色ID
 * @format int64
 **/
roleId: number;
};
/**
 * @title PageVO«EmployeesVO»
 **/
export type ZmsxPlatformComponentsSchemasPageVO_EmployeesVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPlatformComponentsSchemasEmployeesVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«RoleInfoVO»
 **/
export type ZmsxPlatformComponentsSchemasPageVO_RoleInfoVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPlatformComponentsSchemasRoleInfoVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«EmployeeDetailVO»
 **/
export type ZmsxPlatformComponentsSchemasResult_EmployeeDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPlatformComponentsSchemasEmployeeDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«List«EmployeesVO»»
 **/
export type ZmsxPlatformComponentsSchemasResult_List_EmployeesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPlatformComponentsSchemasEmployeesVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«RoleInfoVO»»
 **/
export type ZmsxPlatformComponentsSchemasResult_List_RoleInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPlatformComponentsSchemasRoleInfoVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«EmployeesVO»»
 **/
export type ZmsxPlatformComponentsSchemasResult_PageVO_EmployeesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPlatformComponentsSchemasPageVO_EmployeesVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«RoleInfoVO»»
 **/
export type ZmsxPlatformComponentsSchemasResult_PageVO_RoleInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPlatformComponentsSchemasPageVO_RoleInfoVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PlatformDetailVO»
 **/
export type ZmsxPlatformComponentsSchemasResult_PlatformDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPlatformComponentsSchemasPlatformDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«RoleInfoVO»
 **/
export type ZmsxPlatformComponentsSchemasResult_RoleInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPlatformComponentsSchemasRoleInfoVO;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxPlatformComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
export interface PathsZmsxPlatform{'/platform/console/employee': {get: {
param:{query: {
/**
 * @description empId
 * @format int64
 **/
empId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_EmployeeDetailVO_;
};
};
'/platform/console/employee/change': {put: {
param:{
/**
 * @description enableDTO
 **/
body: ZmsxPlatformComponentsSchemasChangeEmployeeEnableDTO;
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_Void_;
};
};
'/platform/console/employee/edit': {put: {
param:{
/**
 * @description employeesDTO
 **/
body: ZmsxPlatformComponentsSchemasEmployeesDTO;
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_Void_;
};
};
'/platform/console/employee/employees': {get: {
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_List_EmployeesVO_;
};
};
'/platform/console/employee/page': {post: {
param:{
/**
 * @description employeesPageDTO
 **/
body: ZmsxPlatformComponentsSchemasEmployeesPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_PageVO_EmployeesVO_;
};
};
'/platform/console/platform': {get: {
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_PlatformDetailVO_;
};
};
'/platform/console/role': {post: {
param:{
/**
 * @description roleInfoDTO
 **/
body: ZmsxPlatformComponentsSchemasRoleInfoDTO;
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_Void_;
};
};
'/platform/console/role/delete': {delete: {
param:{query: {
/**
 * @description roleId
 * @format int64
 **/
roleId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_Void_;
};
};
'/platform/console/role/detail': {get: {
param:{query: {
/**
 * @description roleId
 * @format int64
 **/
roleId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_RoleInfoVO_;
};
};
'/platform/console/role/list': {get: {
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_List_RoleInfoVO_;
};
};
'/platform/console/role/page': {post: {
param:{
/**
 * @description rolePageDTO
 **/
body: ZmsxPlatformComponentsSchemasRolePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_PageVO_RoleInfoVO_;
};
};
'/platform/console/role/switchEnable': {post: {
param:{
/**
 * @description roleSwitchDTO
 **/
body: ZmsxPlatformComponentsSchemasRoleSwitchDTO;
}
/**
 * @description OK
 **/
response: ZmsxPlatformComponentsSchemasResult_Void_;
};
};
}

/**
 * @title AppletCategoryVO
 **/
export type ZmsxAlipayComponentsSchemasAppletCategoryVO = {
/**
 * @description 类目ID
 **/
categoryId: string;
/**
 * @description 类目名称
 **/
categoryName: string;
/**
 * @description 子类目
 **/
child: ZmsxAlipayComponentsSchemasAppletCategoryVO[];
/**
 * @description 是否需要执照
 **/
needLicense: boolean;
/**
 * @description 是否需要门头照
 **/
needOutDoorPic: boolean;
/**
 * @description 是否需要特殊资质
 **/
needSpecialLicense: boolean;
};
/**
 * @title AppletQRCode
 **/
export type ZmsxAlipayComponentsSchemasAppletQRCode = {qrCodeUrl: string;
qrCodeUrlCircleBlue: string;
qrCodeUrlCircleWhite: string;
};
/**
 * @title ApplyAppletManalDTO
 **/
export type ZmsxAlipayComponentsSchemasApplyAppletManalDTO = {
/**
 * @description 提审的小程序appId
 **/
appId: string;
/**
 * @description 版本号
 **/
appVersion: string;
/**
 * @description 提审内容
 **/
versionDesc: string;
};
/**
 * @title BankBranchInfo
 **/
export type ZmsxAlipayComponentsSchemasBankBranchInfo = {
/**
 * @description 分行名称
 **/
branchBankName: string;
/**
 * @description 分行联合行号
 **/
branchUnionNo: string;
};
/**
 * @title BankInfo
 **/
export type ZmsxAlipayComponentsSchemasBankInfo = {
/**
 * @description 银行Code
 **/
bankCode: string;
/**
 * @description 银行名称
 **/
bankName: string;
};
/**
 * @title CreateQrCodeDTO
 **/
export type ZmsxAlipayComponentsSchemasCreateQrCodeDTO = {
/**
 * @description 小程序APPID
 **/
appId: string;
/**
 * @description 二维码描述, 
 **/
describe: string;
/**
 * @description 二维码跳转路径
 **/
path: string;
/**
 * @description 二维码跳转路径参数, 
 **/
pathParams: string;
};
/**
 * @title IndustryQualification
 **/
export type ZmsxAlipayComponentsSchemasIndustryQualification = {industryQualificationType: string;
specialCertDesc: string;
};
/**
 * @title QueryBankBranchDTO
 **/
export type ZmsxAlipayComponentsSchemasQueryBankBranchDTO = {
/**
 * @description 银行代码
 **/
bankCode: string;
/**
 * @description 市：名称
 **/
cityName: string;
/**
 * @description 省：名称
 **/
provinceName: string;
};
/**
 * @title ServiceCategoryVO
 **/
export type ZmsxAlipayComponentsSchemasServiceCategoryVO = {
/**
 * @description 目录ID, 没有为空
 **/
categoryId: string;
/**
 * @description 目录名称
 **/
categoryName: string;
/**
 * @description 子目录
 **/
child: ZmsxAlipayComponentsSchemasServiceCategoryVO[];
};
/**
 * @title ZftCategoryVO
 **/
export type ZmsxAlipayComponentsSchemasZftCategoryVO = {
/**
 * @description 适用商家描述
 **/
adapterMerchantDesc: string;
/**
 * @description 类目Code
 **/
categoryCode: string;
/**
 * @description 类目名称
 **/
categoryName: string;
/**
 * @description 子类目
 **/
child: ZmsxAlipayComponentsSchemasZftCategoryVO[];
/**
 * @description 特殊场景需求列表
 **/
industryQualificationList: ZmsxAlipayComponentsSchemasIndustryQualification[];
/**
 * @description 是否需要特殊资质，特殊资质描述
 **/
specialNeed: boolean;
/**
 * @description 特殊资质code，特殊场景需要
 **/
specialNeedCode: string;
};
/**
 * @title Result«AppletQRCode»
 **/
export type ZmsxAlipayComponentsSchemasResult_AppletQRCode_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxAlipayComponentsSchemasAppletQRCode;
msg: string;
success: boolean;
};
/**
 * @title Result«List«AppletCategoryVO»»
 **/
export type ZmsxAlipayComponentsSchemasResult_List_AppletCategoryVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxAlipayComponentsSchemasAppletCategoryVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«BankBranchInfo»»
 **/
export type ZmsxAlipayComponentsSchemasResult_List_BankBranchInfo_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxAlipayComponentsSchemasBankBranchInfo[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«BankInfo»»
 **/
export type ZmsxAlipayComponentsSchemasResult_List_BankInfo_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxAlipayComponentsSchemasBankInfo[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«ServiceCategoryVO»»
 **/
export type ZmsxAlipayComponentsSchemasResult_List_ServiceCategoryVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxAlipayComponentsSchemasServiceCategoryVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«ZftCategoryVO»»
 **/
export type ZmsxAlipayComponentsSchemasResult_List_ZftCategoryVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxAlipayComponentsSchemasZftCategoryVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxAlipayComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
/**
 * @title Result«string»
 **/
export type ZmsxAlipayComponentsSchemasResult_string_ = {
/**
 * @format int32
 **/
code: number;
data: string;
msg: string;
success: boolean;
};
export interface PathsZmsxAlipay{'/alipay/dict/applet/category': {get: {
/**
 * @description OK
 **/
response: ZmsxAlipayComponentsSchemasResult_List_AppletCategoryVO_;
};
};
'/alipay/dict/applyAppletManual': {post: {
param:{
/**
 * @description manalDTO
 **/
body: ZmsxAlipayComponentsSchemasApplyAppletManalDTO;
}
/**
 * @description OK
 **/
response: ZmsxAlipayComponentsSchemasResult_Void_;
};
};
'/alipay/dict/bankList': {get: {
/**
 * @description OK
 **/
response: ZmsxAlipayComponentsSchemasResult_List_BankInfo_;
};
};
'/alipay/dict/branchBankList': {post: {
param:{
/**
 * @description queryBankBranchDTO
 **/
body: ZmsxAlipayComponentsSchemasQueryBankBranchDTO;
}
/**
 * @description OK
 **/
response: ZmsxAlipayComponentsSchemasResult_List_BankBranchInfo_;
};
};
'/alipay/dict/createExpApplet': {get: {
param:{query: {
/**
 * @description version
 **/
version: string;
};
}
/**
 * @description OK
 **/
response: ZmsxAlipayComponentsSchemasResult_string_;
};
};
'/alipay/dict/qrCode': {post: {
param:{
/**
 * @description createQrCodeDTO
 **/
body: ZmsxAlipayComponentsSchemasCreateQrCodeDTO;
}
/**
 * @description OK
 **/
response: ZmsxAlipayComponentsSchemasResult_AppletQRCode_;
};
};
'/alipay/dict/service/category': {get: {
/**
 * @description OK
 **/
response: ZmsxAlipayComponentsSchemasResult_List_ServiceCategoryVO_;
};
};
'/alipay/dict/zft/category': {get: {
/**
 * @description OK
 **/
response: ZmsxAlipayComponentsSchemasResult_List_ZftCategoryVO_;
};
};
}

/**
 * @title ModelAndView
 **/
export type ZmsxIdComponentsSchemasModelAndView = {empty: boolean;
model: {[x: string | number]: any};
modelMap: {[x: string | number]: {[x: string | number]: any};
};
reference: boolean;
status: "ACCEPTED" | "ALREADY_REPORTED" | "BAD_GATEWAY" | "BAD_REQUEST" | "BANDWIDTH_LIMIT_EXCEEDED" | "CHECKPOINT" | "CONFLICT" | "CONTINUE" | "CREATED" | "DESTINATION_LOCKED" | "EXPECTATION_FAILED" | "FAILED_DEPENDENCY" | "FORBIDDEN" | "FOUND" | "GATEWAY_TIMEOUT" | "GONE" | "HTTP_VERSION_NOT_SUPPORTED" | "IM_USED" | "INSUFFICIENT_SPACE_ON_RESOURCE" | "INSUFFICIENT_STORAGE" | "INTERNAL_SERVER_ERROR" | "I_AM_A_TEAPOT" | "LENGTH_REQUIRED" | "LOCKED" | "LOOP_DETECTED" | "METHOD_FAILURE" | "METHOD_NOT_ALLOWED" | "MOVED_PERMANENTLY" | "MOVED_TEMPORARILY" | "MULTIPLE_CHOICES" | "MULTI_STATUS" | "NETWORK_AUTHENTICATION_REQUIRED" | "NON_AUTHORITATIVE_INFORMATION" | "NOT_ACCEPTABLE" | "NOT_EXTENDED" | "NOT_FOUND" | "NOT_IMPLEMENTED" | "NOT_MODIFIED" | "NO_CONTENT" | "OK" | "PARTIAL_CONTENT" | "PAYLOAD_TOO_LARGE" | "PAYMENT_REQUIRED" | "PERMANENT_REDIRECT" | "PRECONDITION_FAILED" | "PRECONDITION_REQUIRED" | "PROCESSING" | "PROXY_AUTHENTICATION_REQUIRED" | "REQUESTED_RANGE_NOT_SATISFIABLE" | "REQUEST_ENTITY_TOO_LARGE" | "REQUEST_HEADER_FIELDS_TOO_LARGE" | "REQUEST_TIMEOUT" | "REQUEST_URI_TOO_LONG" | "RESET_CONTENT" | "SEE_OTHER" | "SERVICE_UNAVAILABLE" | "SWITCHING_PROTOCOLS" | "TEMPORARY_REDIRECT" | "TOO_EARLY" | "TOO_MANY_REQUESTS" | "UNAUTHORIZED" | "UNAVAILABLE_FOR_LEGAL_REASONS" | "UNPROCESSABLE_ENTITY" | "UNSUPPORTED_MEDIA_TYPE" | "UPGRADE_REQUIRED" | "URI_TOO_LONG" | "USE_PROXY" | "VARIANT_ALSO_NEGOTIATES";
view: ZmsxIdComponentsSchemasView;
viewName: string;
};
/**
 * @title View
 **/
export type ZmsxIdComponentsSchemasView = {contentType: string;
};
/**
 * @title Result«string»
 **/
export type ZmsxIdComponentsSchemasResult_string_ = {
/**
 * @format int32
 **/
code: number;
data: string;
msg: string;
success: boolean;
};
export interface PathsZmsxId{'/id/error': {get: {
/**
 * @description OK
 **/
response: {[x: string | number]: {[x: string | number]: any};
};
};
head: {
/**
 * @description OK
 **/
response: {[x: string | number]: {[x: string | number]: any};
};
};
post: {
/**
 * @description OK
 **/
response: {[x: string | number]: {[x: string | number]: any};
};
};
put: {
/**
 * @description OK
 **/
response: {[x: string | number]: {[x: string | number]: any};
};
};
delete: {
/**
 * @description OK
 **/
response: {[x: string | number]: {[x: string | number]: any};
};
};
options: {
/**
 * @description OK
 **/
response: {[x: string | number]: {[x: string | number]: any};
};
};
patch: {
/**
 * @description OK
 **/
response: {[x: string | number]: {[x: string | number]: any};
};
};
};
'/id/feign/getId': {get: {
param:{query: {
/**
 * @description key
 **/
key: string;
/**
 * @description prefix
 **/
prefix: string;
};
}
/**
 * @description OK
 **/
response: ZmsxIdComponentsSchemasResult_string_;
};
};
'/id/feign/getIdWithTime': {get: {
param:{query: {
/**
 * @description key
 **/
key: string;
/**
 * @description prefix
 **/
prefix: string;
};
}
/**
 * @description OK
 **/
response: ZmsxIdComponentsSchemasResult_string_;
};
};
}

/**
 * @title AppOrderDetailVO
 **/
export type ZmsxOrderComponentsSchemasAppOrderDetailVO = {
/**
 * @description 实付金额
 **/
actualPayment: string;
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡
 **/
cardType: string;
/**
 * @description 优惠券金额
 **/
couponAmount: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 有效天数
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 开卡方式：PRESET：预约开卡，INSTANT：即时开卡
 **/
openType: string;
/**
 * @description 订单金额
 **/
orderAmount: string;
/**
 * @description 订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 订单编号
 **/
orderNo: string;
/**
 * @description 订单状态，WAIT_PAY:待支付, PAYING：支付中， SUCCESS:已完成, CANCEL 已关闭
 **/
orderStatus: string;
/**
 * @description 订单时间
 **/
orderTime: string;
/**
 * @description 订单类型 GOODS: 商品订单，PAYMENT: 买单, EQUITY 安心充订单, RECEIVE 体验商品订单
 **/
orderType: string;
/**
 * @description 额度
 * @format int32
 **/
quota: number;
/**
 * @description 商品所属店铺
 **/
shopName: string;
/**
 * @description 可用门店
 **/
shopNames: string[];
/**
 * @description 预约开卡时间
 **/
subscribeOpenTime: string;
/**
 * @description 支付宝券ID
 **/
voucherCode: string;
};
/**
 * @title ContractDetailVO
 **/
export type ZmsxOrderComponentsSchemasContractDetailVO = {
/**
 * @description 合计金额
 **/
actualPayment: string;
/**
 * @description 允许N期后用户解约
 **/
allowSurrenderPeriods: string;
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡
 **/
cardType: string;
/**
 * @description 扣减固定金额
 **/
deductionAmount: string;
/**
 * @description 前N期金额
 **/
downPayment: string;
/**
 * @description 首期扣款日期
 **/
downPaymentDate: string;
/**
 * @description 前N期期数
 **/
downPaymentPeriods: string;
/**
 * @description 有效期
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 开启用户主动付款功能
 **/
enableUserActivePay: string;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 商户PID
 **/
merchantPid: string;
/**
 * @description 用户昵称
 **/
nickName: string;
/**
 * @description 开卡方式
 **/
openType: string;
/**
 * @description 订单金额
 **/
orderAmount: string;
/**
 * @description 合约订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 订单编号
 **/
orderNo: string;
/**
 * @description 待签约WAIT_SIGN，订购状态,正常NORMAL， 暂停PAUSED， 已解约SURRENDER， 已完结END， 违约取消DEFAULT_CANCEL  已关闭 CANCEL
 **/
orderStatus: string;
/**
 * @description 订单时间
 **/
orderTime: string;
/**
 * @description 原价金额
 **/
originalPrice: string;
/**
 * @description 第三方订购号
 **/
outSubscriptionNo: string;
/**
 * @description 订购过期日期
 **/
overdueDate: string;
/**
 * @description 开通总周期数
 **/
periods: string;
/**
 * @description 产品名称
 **/
productName: string;
/**
 * @description 产品编号
 **/
productNo: string;
/**
 * @description 商品类型
 **/
productType: string;
/**
 * @description 额度
 * @format int32
 **/
quota: number;
/**
 * @description 店铺名称
 **/
shopName: string;
/**
 * @description 签约时间
 **/
signTime: string;
/**
 * @description sku编码
 **/
skuNo: string;
/**
 * @description 扣款计划
 **/
stagePays: ZmsxOrderComponentsSchemasStagePayInfoVO[];
/**
 * @description 预约开卡时间
 **/
subscribeOpenTime: string;
/**
 * @description 订购单编号
 **/
subscriptionNo: string;
};
/**
 * @title ContractOrderPageVO
 **/
export type ZmsxOrderComponentsSchemasContractOrderPageVO = {
/**
 * @description 是否允许解约
 **/
cancel: boolean;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 订单金额
 **/
orderAmount: string;
/**
 * @description 合约订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 待签约WAIT_SIGN，订购状态,正常NORMAL， 暂停PAUSED， 已解约SURRENDER， 已完结END， 违约取消DEFAULT_CANCEL  已关闭 CANCEL
 **/
orderStatus: string;
/**
 * @description 店铺名称
 **/
shopName: string;
/**
 * @description 签约时间
 **/
signTime: string;
/**
 * @description 合约号
 **/
subscriptionNo: string;
};
/**
 * @title ContractPageDTO
 **/
export type ZmsxOrderComponentsSchemasContractPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 待签约WAIT_SIGN，订购状态,正常NORMAL， 暂停PAUSED， 已解约SURRENDER， 已完结END， 违约取消DEFAULT_CANCEL  已关闭 CANCEL
 **/
orderStatus?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title CreateOrderDTO
 **/
export type ZmsxOrderComponentsSchemasCreateOrderDTO = {
/**
 * @description 商品ID， 安心充下单、体验商品下单必传
 * @format int64
 **/
goodsId: number;
/**
 * @description 商品SKU编号，商品订单必传
 **/
goodsSkuNo: string;
/**
 * @description 商户id 放心Go下单必传
 * @format int64
 **/
merchantId: number;
/**
 * @description 开卡方式：PRESET：预约开卡，INSTANT：即时开卡; 普通商品下单必传
 **/
openType: string;
/**
 * @description 订单类型，PAYMENT: 支付订单，GOODS: 商品订单, EQUITY 安心冲下单, RECEIVE 体验商品下单
 **/
orderType: string;
/**
 * @description 支付金额, 支付订单必传
 **/
payAmount: number;
/**
 * @description 店铺ID 放心Go, 体验商品 下单必传
 **/
shopId: string;
/**
 * @description 预约开卡时间,普通商品下单必传
 * @format date-time
 **/
subscribeOpenTime: string;
/**
 * @description 支付宝券ID
 **/
voucherCode: string;
};
/**
 * @title EquityUniteOrderDTO
 **/
export type ZmsxOrderComponentsSchemasEquityUniteOrderDTO = {
/**
 * @description 安心充商品ID， 安心充下单必传
 * @format int64
 **/
goodsId: number;
/**
 * @description 商户id
 * @format int64
 **/
merchantId: number;
/**
 * @description 订单类型，PAYMENT: 支付订单，GOODS: 商品订单, EQUITY 安心冲下单
 **/
orderType: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
};
/**
 * @title OrderDetailDTO
 **/
export type ZmsxOrderComponentsSchemasOrderDetailDTO = {
/**
 * @description 订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 支付方式(该字段必传，决定了需要查询哪个订单表) STAGE_PAY 阶段付；ALIPAY 支付宝
 **/
payType: string;
};
/**
 * @title OrderDetailVO
 **/
export type ZmsxOrderComponentsSchemasOrderDetailVO = {
/**
 * @description 实付金额
 **/
actualPayment: string;
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡, QUOTA 额度卡
 **/
cardType: string;
/**
 * @description 成本价
 **/
costPrice: string;
/**
 * @description 优惠券金额
 **/
couponAmount: string;
/**
 * @description 下单时间
 **/
createTime: string;
/**
 * @description 折扣
 **/
discount: string;
/**
 * @description 赠送额度（次/分）
 **/
giveValue: string;
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
goodsInfo: ZmsxOrderComponentsSchemasOrderGoodsInfoVO;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 商品编码
 **/
goodsNo: string;
/**
 * @description 商品数量
 * @format int32
 **/
goodsNum: number;
/**
 * @description 商品支付金额
 **/
goodsPrice: string;
/**
 * @description 订单金额
 **/
orderAmount: string;
/**
 * @description 订单编号
 **/
orderNo: string;
/**
 * @description 订单状态，待支付WAIT_PAY, 订单支付成功SUCCESS, 支付失败FAIL,待签约WAIT_SIGN，正常NORMAL， 暂停PAUSED， 已解约SURRENDER， 已完结END， 违约取消DEFAULT_CANCEL  已关闭 CANCEL
 **/
orderStatus: string;
/**
 * @description 订单类型
 **/
orderType: string;
/**
 * @description 原价
 **/
originalPrice: string;
/**
 * @description 商品所属服务商
 **/
ownershipPartnerName: string;
/**
 * @description 支付类型
 **/
payType: string;
/**
 * @description 总期数
 * @format int32
 **/
periods: number;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 订购单编号
 **/
subscriptionNo: string;
/**
 * @description 支付单号
 **/
transactionId: string;
/**
 * @description 买家昵称
 **/
userNickName: string;
/**
 * @description 买家手机号
 **/
userTel: string;
/**
 * @description 支付宝券ID
 **/
voucherCode: string;
};
/**
 * @title OrderGoodsInfoVO
 **/
export type ZmsxOrderComponentsSchemasOrderGoodsInfoVO = {
/**
 * @description 成本价
 **/
costPrice: string;
/**
 * @description 有效天数
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 商品编码
 **/
goodsNo: string;
/**
 * @description 商品数量
 * @format int32
 **/
goodsNum: number;
/**
 * @description 商品类型：TIMES：次数卡，PERIOD：周期卡, QUOTA 额度卡
 **/
goodsType: string;
/**
 * @description 开卡时间
 **/
openDate: string;
/**
 * @description 开卡方式
 **/
openType: string;
/**
 * @description 原价
 **/
originalPrice: string;
/**
 * @description 到期时间
 **/
overdueDate: string;
/**
 * @description 阶段付分期总周期数
 * @format int32
 **/
periods: number;
/**
 * @description 优惠价
 **/
price: string;
/**
 * @description 额度
 * @format int32
 **/
quota: number;
/**
 * @description 适用门店
 **/
shopNames: string;
/**
 * @description 支持消费项
 **/
supportItemTag: string;
};
/**
 * @title OrderPageDTO
 **/
export type ZmsxOrderComponentsSchemasOrderPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 订单号
 **/
orderNo?: string;
/**
 * @description 订单状态，WAIT_PAY:待支付, SUCCESS:已完成, FAIL:支付失败（支付宝返回状态）
 **/
orderStatus?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 支付方式 STAGE_PAY 阶段付，ALIPAY 支付宝支付
 **/
payType?: string;
/**
 * @description 门店ID合集
 **/
shopIds?: number[];
/**
 * @description 订单时间起
 **/
timeBegin?: string;
/**
 * @description 订单时间止
 **/
timeEnd?: string;
/**
 * @description 买家名称
 **/
userNickName?: string;
/**
 * @description 买家手机号
 **/
userTel?: string;
};
/**
 * @title OrderPageVO
 **/
export type ZmsxOrderComponentsSchemasOrderPageVO = {
/**
 * @description 实际支付金额
 **/
actualAmount: string;
/**
 * @description 优惠券金额
 **/
couponAmount: string;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 订单金额
 **/
orderAmount: string;
/**
 * @description 订单ID
 **/
orderId: string;
/**
 * @description 订单编号
 **/
orderNo: string;
/**
 * @description 订单状态，WAIT_PAY:待支付, PAYING：支付中， SUCCESS:已完成, CANCEL 已关闭
 **/
orderStatus: string;
/**
 * @description 订单时间
 **/
orderTime: string;
/**
 * @description 支付方式 STAGE_PAY 阶段付；ALIPAY 支付宝
 **/
payType: string;
/**
 * @description 商品所属店铺
 **/
shopName: string;
/**
 * @description 支付宝优惠券编码
 **/
voucherCode: string;
};
/**
 * @title OrderUnitePageDTO
 **/
export type ZmsxOrderComponentsSchemasOrderUnitePageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 订单状态，WAIT_PAY, SUCCESS, CANCEL
 **/
orderStatus?: string;
/**
 * @description 订单类型 GOODS: 商品订单，PAYMENT: 支付订单, EQUITY 安心充订单, RECEIVE 体验商品订单
 **/
orderType?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title OrderVO
 **/
export type ZmsxOrderComponentsSchemasOrderVO = {
/**
 * @description 实付金额
 **/
actualAmount: string;
/**
 * @description 优惠券金额
 **/
couponAmount: string;
/**
 * @description 下单时间
 **/
createTime: string;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 商品数量
 * @format int32
 **/
goodsNum: number;
/**
 * @description 订单金额
 **/
orderAmount: number;
/**
 * @description 自增主键
 * @format int64
 **/
orderId: number;
/**
 * @description 订单号
 **/
orderNo: string;
/**
 * @description 订单状态，待支付WAIT_PAY, 订单支付成功SUCCESS, 支付失败FAIL,待签约WAIT_SIGN，正常NORMAL， 暂停PAUSED， 已解约SURRENDER， 已完结END， 违约取消DEFAULT_CANCEL  已关闭 CANCEL
 **/
orderStatus: string;
/**
 * @description 订单类型，GOODS: 商品订单，PAYMENT: 支付订单，EQUITY 安心冲权益订单
 **/
orderType: string;
/**
 * @description 支付方式 STAGE_PAY 阶段付；ALIPAY 支付宝;C
 **/
payType: string;
/**
 * @description 店铺名称
 **/
shopName: string;
/**
 * @description 用户昵称
 **/
userNickName: string;
/**
 * @description 用户手机号
 **/
userTel: string;
/**
 * @description 支付宝券ID
 **/
voucherCode: string;
};
/**
 * @title PartnerOrderPageDTO
 **/
export type ZmsxOrderComponentsSchemasPartnerOrderPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商品名称查询
 **/
goodsName?: string;
/**
 * @description 订单号
 **/
orderNo?: string;
/**
 * @description 订单状态，WAIT_PAY:待支付, SUCCESS:已完成, CANCEL:关闭
 **/
orderStatus?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 订单时间起
 **/
timeBegin?: string;
/**
 * @description 订单时间止
 **/
timeEnd?: string;
/**
 * @description 买家昵称
 **/
userNickName?: string;
/**
 * @description 买家手机号
 **/
userTel?: string;
};
/**
 * @title PartnerOrderPageVO
 **/
export type ZmsxOrderComponentsSchemasPartnerOrderPageVO = {
/**
 * @description 合计金额
 **/
actualAmount: string;
/**
 * @description 成本价
 **/
costPrice: string;
/**
 * @description 下单时间
 **/
createTime: string;
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 数量
 **/
goodsNum: string;
/**
 * @description 订单金额
 **/
orderAmount: string;
/**
 * @description 订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 订单号
 **/
orderNo: string;
/**
 * @description 订单状态（按之前规则解析）
 **/
orderStatus: string;
/**
 * @description 归属服务商
 **/
ownershipPartnerName: string;
/**
 * @description 可用门店合集
 **/
shopNames: string;
/**
 * @description 支付单号
 **/
transactionId: string;
/**
 * @description 买家昵称
 **/
userNickName: string;
/**
 * @description 买家手机号
 **/
userTel: string;
};
/**
 * @title PartnerSalesPageDTO
 **/
export type ZmsxOrderComponentsSchemasPartnerSalesPageDTO = {
/**
 * @description 销售途径-小程序名
 **/
appletName?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商品名称
 **/
goodsName?: string;
/**
 * @description 订单号
 **/
orderNo?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 销售途径-服务商
 **/
partnerName?: string;
/**
 * @description 下单时间起
 **/
timeBegin?: string;
/**
 * @description 下单时间止
 **/
timeEnd?: string;
/**
 * @description 买家昵称
 **/
userNickName?: string;
/**
 * @description 买家手机号
 **/
userTel?: string;
};
/**
 * @title PartnerSalesPageVO
 **/
export type ZmsxOrderComponentsSchemasPartnerSalesPageVO = {
/**
 * @description 合计金额
 **/
actualAmount: string;
/**
 * @description 销售途径-小程序名
 **/
appletName: string;
/**
 * @description 可用门店
 **/
availableStores: string;
/**
 * @description 成本价
 **/
costPrice: string;
/**
 * @description 下单时间
 **/
createTime: string;
/**
 * @description 商品金额
 **/
goodsAmount: string;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 数量
 **/
goodsNum: string;
/**
 * @description 订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 订单号
 **/
orderNo: string;
/**
 * @format int64
 **/
partnerId: number;
/**
 * @description 销售途径-服务商
 **/
partnerName: string;
/**
 * @description 支付流水号
 **/
transactionId: string;
/**
 * @description 买家昵称
 **/
userNickName: string;
/**
 * @description 买家手机号
 **/
userTel: string;
};
/**
 * @title ReceiveOrderDetailVO
 **/
export type ZmsxOrderComponentsSchemasReceiveOrderDetailVO = {
/**
 * @description 合计金额
 **/
actualPayment: string;
/**
 * @description 下单时间
 **/
createTime: string;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 订单金额
 **/
orderAmount: string;
/**
 * @description 订单id
 * @format int64
 **/
orderId: number;
/**
 * @description 订单号
 **/
orderNo: string;
/**
 * @description 订单状态（按之前的解析）
 **/
orderStatus: string;
/**
 * @description 可用门店
 **/
shopNames: string[];
};
/**
 * @title RedPkgOrderDTO
 **/
export type ZmsxOrderComponentsSchemasRedPkgOrderDTO = {orderAmount: string;
/**
 * @format int64
 **/
shopId: number;
};
/**
 * @title StagePayDTO
 **/
export type ZmsxOrderComponentsSchemasStagePayDTO = {
/**
 * @description 开卡方式：PRESET：预约开卡，INSTANT：即时开卡
 **/
openType: string;
/**
 * @description 商品SKU编号
 **/
productSkuNo?: string;
/**
 * @description 预约开卡日期
 **/
subscribeOpenTime: string;
};
/**
 * @title StagePayInfoVO
 **/
export type ZmsxOrderComponentsSchemasStagePayInfoVO = {
/**
 * @description 扣款计划状态
 **/
deductStatus: string;
/**
 * @description 扣款金额
 **/
deductionAmount: string;
/**
 * @description 扣款期数
 * @format int32
 **/
period: number;
/**
 * @description 扣款日期
 **/
stageDeductSpecifyDay: string;
};
/**
 * @title StagePayInfoVO0
 **/
export type ZmsxOrderComponentsSchemasStagePayInfoVO0 = {
/**
 * @description 允许N期后用户解约
 **/
allowSurrenderPeriods: string;
/**
 * @description 扣减固定金额
 **/
deductionAmount: string;
/**
 * @description 前N期金额
 **/
downPayment: string;
/**
 * @description 首期扣款日期
 **/
downPaymentDate: string;
/**
 * @description 前N期期数
 **/
downPaymentPeriods: string;
/**
 * @description 开启用户主动付款功能
 **/
enableUserActivePay: string;
/**
 * @description 商户PID
 **/
merchantPid: string;
/**
 * @description 是否需要核销码,Y: 需要，N：不需要
 **/
needVerifyCode: string;
/**
 * @description 用户昵称
 **/
nickName: string;
/**
 * @description 订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 原价金额
 **/
originalPrice: string;
/**
 * @description 第三方订购号
 **/
outSubscriptionNo: string;
/**
 * @description 订购过期日期
 **/
overdueDate: string;
/**
 * @description 开通总周期数
 **/
periods: string;
/**
 * @description 产品名称
 **/
productName: string;
/**
 * @description 产品编号
 **/
productNo: string;
/**
 * @description 商品类型
 **/
productType: string;
/**
 * @description 预约开卡时间
 * @format date-time
 **/
subscribeOpenTime: string;
};
/**
 * @title SubOrderCancelDTO
 **/
export type ZmsxOrderComponentsSchemasSubOrderCancelDTO = {
/**
 * @description 解约类型，DEFAULT: 违约取消(解约后要追回已享优惠), NORMAL: 正常解取消(不涉及优惠追回)
 **/
cancelType: string;
/**
 * @description 订购单编号
 **/
subscriptionNo: string;
};
/**
 * @title SubscribeDeductPlanVO
 **/
export type ZmsxOrderComponentsSchemasSubscribeDeductPlanVO = {
/**
 * @description 订购计划单ID
 * @format int64
 **/
deductPlanId: number;
/**
 * @description 扣款状态，已暂停 PAUSED， 下单中 ORDERING,  下单成功 ORDERED， 支付成功 PAID， 扣款失败 PAY_FAILED, 已全额退款 REFUNDED, 未生成订单 UNCREATED , 已取消 CANCEL
 **/
deductStatus: string;
/**
 * @description 扣款时间  扣款成功回填
 **/
deductTime: string;
/**
 * @description 扣款金额
 **/
deductionAmount: string;
/**
 * @description 计划扣款日期(有日期展示日期，没有日期根据期数拼接阶段信息)
 **/
deductionDate: string;
/**
 * @description 期数
 * @format int32
 **/
periods: number;
};
/**
 * @title TradeOrderStaticDTO
 **/
export type ZmsxOrderComponentsSchemasTradeOrderStaticDTO = {
/**
 * @description 订单号
 **/
orderNo: string;
/**
 * @description 门店ID合集
 **/
shopIds: number[];
/**
 * @description 订单时间起
 **/
timeBegin: string;
/**
 * @description 订单时间止
 **/
timeEnd: string;
};
/**
 * @title UniteOrderDTO
 **/
export type ZmsxOrderComponentsSchemasUniteOrderDTO = {
/**
 * @description 安心充商品ID， 安心充下单必传
 * @format int64
 **/
goodsId?: number;
/**
 * @description 商品SKU编号，商品订单必传
 **/
goodsSkuNo?: string;
/**
 * @description 开卡方式：PRESET：预约开卡，INSTANT：即时开卡
 **/
openType?: string;
/**
 * @description 订单类型，PAYMENT: 支付订单，GOODS: 商品订单, EQUITY 安心冲下单
 **/
orderType?: string;
/**
 * @description 支付金额, 支付订单必传
 **/
payAmount?: number;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId?: number;
/**
 * @description 预约开卡时间
 * @format date-time
 **/
subscribeOpenTime: string;
/**
 * @description 支付宝券ID
 **/
voucherCode?: string;
};
/**
 * @title PageVO«ContractOrderPageVO»
 **/
export type ZmsxOrderComponentsSchemasPageVO_ContractOrderPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxOrderComponentsSchemasContractOrderPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«OrderPageVO»
 **/
export type ZmsxOrderComponentsSchemasPageVO_OrderPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxOrderComponentsSchemasOrderPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«OrderVO»
 **/
export type ZmsxOrderComponentsSchemasPageVO_OrderVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxOrderComponentsSchemasOrderVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PartnerOrderPageVO»
 **/
export type ZmsxOrderComponentsSchemasPageVO_PartnerOrderPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxOrderComponentsSchemasPartnerOrderPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PartnerSalesPageVO»
 **/
export type ZmsxOrderComponentsSchemasPageVO_PartnerSalesPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxOrderComponentsSchemasPartnerSalesPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«AppOrderDetailVO»
 **/
export type ZmsxOrderComponentsSchemasResult_AppOrderDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasAppOrderDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«ContractDetailVO»
 **/
export type ZmsxOrderComponentsSchemasResult_ContractDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasContractDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«List«SubscribeDeductPlanVO»»
 **/
export type ZmsxOrderComponentsSchemasResult_List_SubscribeDeductPlanVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasSubscribeDeductPlanVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«OrderDetailVO»
 **/
export type ZmsxOrderComponentsSchemasResult_OrderDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasOrderDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ContractOrderPageVO»»
 **/
export type ZmsxOrderComponentsSchemasResult_PageVO_ContractOrderPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasPageVO_ContractOrderPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«OrderPageVO»»
 **/
export type ZmsxOrderComponentsSchemasResult_PageVO_OrderPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasPageVO_OrderPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«OrderVO»»
 **/
export type ZmsxOrderComponentsSchemasResult_PageVO_OrderVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasPageVO_OrderVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«PartnerOrderPageVO»»
 **/
export type ZmsxOrderComponentsSchemasResult_PageVO_PartnerOrderPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasPageVO_PartnerOrderPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«PartnerSalesPageVO»»
 **/
export type ZmsxOrderComponentsSchemasResult_PageVO_PartnerSalesPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasPageVO_PartnerSalesPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«ReceiveOrderDetailVO»
 **/
export type ZmsxOrderComponentsSchemasResult_ReceiveOrderDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasReceiveOrderDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«StagePayInfoVO»
 **/
export type ZmsxOrderComponentsSchemasResult_StagePayInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxOrderComponentsSchemasStagePayInfoVO0;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxOrderComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
/**
 * @title Result«double»
 **/
export type ZmsxOrderComponentsSchemasResult_double_ = {
/**
 * @format int32
 **/
code: number;
/**
 * @format double
 **/
data: number;
msg: string;
success: boolean;
};
/**
 * @title Result«string»
 **/
export type ZmsxOrderComponentsSchemasResult_string_ = {
/**
 * @format int32
 **/
code: number;
data: string;
msg: string;
success: boolean;
};
export interface PathsZmsxOrder{'/order/b/deductPlan': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_List_SubscribeDeductPlanVO_;
};
};
'/order/b/order/detail': {post: {
param:{
/**
 * @description orderDetailDTO
 **/
body: ZmsxOrderComponentsSchemasOrderDetailDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_OrderDetailVO_;
};
};
'/order/b/order/page': {post: {
param:{
/**
 * @description orderPageDTO
 **/
body: ZmsxOrderComponentsSchemasOrderPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_PageVO_OrderVO_;
};
};
'/order/b/order/stagepay/unsubscribe': {post: {
param:{
/**
 * @description subOrderCancelDTO
 **/
body: ZmsxOrderComponentsSchemasSubOrderCancelDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_Void_;
};
};
'/order/b/page/stagePay/tradeOrder': {post: {
param:{
/**
 * @description orderPageDTO
 **/
body: ZmsxOrderComponentsSchemasOrderPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_PageVO_OrderVO_;
};
};
'/order/b/redpkg/order': {post: {
param:{
/**
 * @description redPkgOrderDTO
 **/
body: ZmsxOrderComponentsSchemasRedPkgOrderDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_string_;
};
};
'/order/b/tradeOrderTotal': {post: {
param:{
/**
 * @description staticDTO
 **/
body: ZmsxOrderComponentsSchemasTradeOrderStaticDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_double_;
};
};
'/order/c/contract/detail': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_ContractDetailVO_;
};
};
'/order/c/contract/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxOrderComponentsSchemasContractPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_PageVO_ContractOrderPageVO_;
};
};
'/order/c/createOrder': {post: {
param:{
/**
 * @description orderDTO
 **/
body: ZmsxOrderComponentsSchemasCreateOrderDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_AppOrderDetailVO_;
};
};
'/order/c/equityUnite': {post: {
param:{
/**
 * @description uniteOrderDTO
 **/
body: ZmsxOrderComponentsSchemasEquityUniteOrderDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_AppOrderDetailVO_;
};
};
'/order/c/order/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxOrderComponentsSchemasOrderUnitePageDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_PageVO_OrderPageVO_;
};
};
'/order/c/order/stagepay/unsubscribe': {get: {
param:{query: {
/**
 * @description subscriptionNo
 **/
subscriptionNo: string;
};
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_Void_;
};
};
'/order/c/orderPay': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_string_;
};
};
'/order/c/receiveOrderDetail': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_ReceiveOrderDetailVO_;
};
};
'/order/c/stagePay': {post: {
param:{
/**
 * @description stagePayDTO
 **/
body: ZmsxOrderComponentsSchemasStagePayDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_StagePayInfoVO_;
};
};
'/order/c/unite': {post: {
param:{
/**
 * @description uniteOrderDTO
 **/
body: ZmsxOrderComponentsSchemasUniteOrderDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_AppOrderDetailVO_;
};
};
'/order/c/unite/detail': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_AppOrderDetailVO_;
};
};
'/order/c/unite/paying': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId?: number;
};
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_Void_;
};
};
'/order/p/order/export': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxOrderComponentsSchemasPartnerOrderPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_Void_;
};
};
'/order/p/order/orderDetail': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_OrderDetailVO_;
};
};
'/order/p/order/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxOrderComponentsSchemasPartnerOrderPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_PageVO_PartnerOrderPageVO_;
};
};
'/order/p/sale/export': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxOrderComponentsSchemasPartnerSalesPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_Void_;
};
};
'/order/p/sale/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxOrderComponentsSchemasPartnerSalesPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxOrderComponentsSchemasResult_PageVO_PartnerSalesPageVO_;
};
};
}

/**
 * @title PayLogDTO
 **/
export type ZmsxPaymentComponentsSchemasPayLogDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId?: number;
};
/**
 * @title RefundDTO
 **/
export type ZmsxPaymentComponentsSchemasRefundDTO = {
/**
 * @description 支付单号(统一下单，非统一下单不支持退款)
 **/
payOrderNo: string;
};
/**
 * @title UnitePayDTO
 **/
export type ZmsxPaymentComponentsSchemasUnitePayDTO = {
/**
 * @description 统一下单支付订单号，需要先在订单服务下统一下单方可支付
 **/
orderNo: string;
};
/**
 * @title WebPayDTO
 **/
export type ZmsxPaymentComponentsSchemasWebPayDTO = {
/**
 * @description 支付订单号，需要先在订单服务下单方可支付
 **/
orderNo: string;
/**
 * @description 支付金额,单位元，保留2位小数
 **/
payAmount: string;
};
/**
 * @title WebPayLogVO
 **/
export type ZmsxPaymentComponentsSchemasWebPayLogVO = {
/**
 * @description 操作人
 **/
createdBy: string;
/**
 * @description 支付订单号
 **/
orderNo: string;
/**
 * @description 充值金额
 **/
payAmount: string;
/**
 * @description 支付渠道; 
 **/
payChannel: string;
/**
 * @description 支付状态; WAIT_PAY: 待支付，SUCCESS: 支付成功, FAIL: 支付失败
 **/
payStatus: string;
/**
 * @description 充值时间
 **/
payTime: string;
/**
 * @description 支付方式; PAYMENT: 买单，GOODS: 购买
 **/
payType: string;
/**
 * @description 支付流水号
 **/
transactionId: string;
};
/**
 * @title PageVO«WebPayLogVO»
 **/
export type ZmsxPaymentComponentsSchemasPageVO_WebPayLogVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxPaymentComponentsSchemasWebPayLogVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«PageVO«WebPayLogVO»»
 **/
export type ZmsxPaymentComponentsSchemasResult_PageVO_WebPayLogVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxPaymentComponentsSchemasPageVO_WebPayLogVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«string»
 **/
export type ZmsxPaymentComponentsSchemasResult_string_ = {
/**
 * @format int32
 **/
code: number;
data: string;
msg: string;
success: boolean;
};
export interface PathsZmsxPayment{'/payment/b/refund': {post: {
param:{
/**
 * @description refundDTO
 **/
body: ZmsxPaymentComponentsSchemasRefundDTO;
}
/**
 * @description OK
 **/
response: ZmsxPaymentComponentsSchemasResult_PageVO_WebPayLogVO_;
};
};
'/payment/b/webpay': {post: {
param:{
/**
 * @description webPayDTO
 **/
body: ZmsxPaymentComponentsSchemasWebPayDTO;
}
/**
 * @description OK
 **/
response: ZmsxPaymentComponentsSchemasResult_string_;
};
};
'/payment/b/webpay/logs': {post: {
param:{
/**
 * @description payLogDTO
 **/
body: ZmsxPaymentComponentsSchemasPayLogDTO;
}
/**
 * @description OK
 **/
response: ZmsxPaymentComponentsSchemasResult_PageVO_WebPayLogVO_;
};
};
'/payment/c/order': {post: {
param:{
/**
 * @description unitePayDTO
 **/
body: ZmsxPaymentComponentsSchemasUnitePayDTO;
}
/**
 * @description OK
 **/
response: ZmsxPaymentComponentsSchemasResult_string_;
};
};
}

/**
 * @title BalanceLogPageDTO
 **/
export type ZmsxMarketingComponentsSchemasBalanceLogPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 收支类型，IN: 收入，OUT: 支出，留空不限制类型
 **/
logType?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId?: number;
};
/**
 * @title BalanceLogVO
 **/
export type ZmsxMarketingComponentsSchemasBalanceLogVO = {
/**
 * @description 领取人昵称
 **/
alipayUserName: string;
/**
 * @description 收支额度
 **/
amount: string;
/**
 * @description 流水时间
 **/
createTime: string;
/**
 * @description 类型，IN: 收入，OUT: 支出
 **/
recordType: string;
/**
 * @description 收支来源
 **/
recordTypeSource: string;
/**
 * @description 手续费
 **/
serviceFee: number;
/**
 * @description 任务名称
 **/
taskName: string;
};
/**
 * @title CaSearchBoxStatusVO
 **/
export type ZmsxMarketingComponentsSchemasCaSearchBoxStatusVO = {
/**
 * @description 审核状态描述
 **/
auditDesc: string;
/**
 * @description 审核状态，AUDIT: 审核中，PASS: 通过，REJECT: 已拒绝
 **/
auditStatus: string;
};
/**
 * @title CaServiceDTO
 **/
export type ZmsxMarketingComponentsSchemasCaServiceDTO = {
/**
 * @description 小程序ID，非APPID
 * @format int64
 **/
appletId: number;
/**
 * @description 服务类目ID
 **/
categoryId: string;
/**
 * @description 服务类目名称
 **/
categoryName: string;
/**
 * @description 服务描述
 **/
serviceDesc: string;
/**
 * @description 服务ID，添加的情况下可以不传
 * @format int64
 **/
serviceId: number;
/**
 * @description 服务名称
 **/
serviceName: string;
};
/**
 * @title CaServiceQueryDTO
 **/
export type ZmsxMarketingComponentsSchemasCaServiceQueryDTO = {
/**
 * @description 小程序ID
 **/
appletId?: string;
/**
 * @description 服务状态, AGREE: 已通过，REJECT: 审核驳回，AUDIT:  审核中
 **/
auditStatus?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 服务名称
 **/
serviceName?: string;
};
/**
 * @title CaServiceVO
 **/
export type ZmsxMarketingComponentsSchemasCaServiceVO = {
/**
 * @description 审核结果描述
 **/
auditDesc: string;
/**
 * @description 审核状态,AGREE:已通过，REJECT:  已拒绝，AUDIT：审核中,DELETE: 已失效(删除)
 **/
auditStatus: string;
/**
 * @description 审核时间
 **/
auditTime: string;
/**
 * @description 行业类目ID
 **/
categoryId: string;
/**
 * @description 行业类目名称
 **/
categoryName: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 服务编号,支付宝返回
 **/
serviceCode: string;
/**
 * @description 服务ID
 * @format int64
 **/
serviceId: number;
/**
 * @description 服务名称
 **/
serviceName: string;
/**
 * @description 服务编号,支付宝返回
 **/
serviceUrl: string;
/**
 * @description 服务编号,支付宝返回
 **/
serviceXml: string;
};
/**
 * @title ChangeTaskStatusDTO
 **/
export type ZmsxMarketingComponentsSchemasChangeTaskStatusDTO = {
/**
 * @description 门店id
 * @format int64
 **/
shopId: number;
/**
 * @description 任务状态, WAIT_SEND: 待启动，SENDING: 线下领取:OFFLINE
 **/
status: string;
/**
 * @description 红包任务ID
 * @format int64
 **/
taskId: number;
};
/**
 * @title CustomerReceiveTaskVO
 **/
export type ZmsxMarketingComponentsSchemasCustomerReceiveTaskVO = {
/**
 * @description 已领取的红包ID
 **/
agreementId: string;
/**
 * @description appID
 **/
appId: string;
/**
 * @description 先享权益
 **/
benefitDesc: string;
/**
 * @description 履约进度/次数 
 **/
finishProgress: string;
/**
 * @format int64
 **/
merchantId: number;
/**
 * @description 任务要求金额
 **/
needAmount: string;
/**
 * @description 任务要求次数
 * @format int32
 **/
needTimes: number;
/**
 * @description 红包金额
 **/
redpkgFee: string;
/**
 * @description 距离任务结束的剩余时间，单位：秒
 * @format int64
 **/
remainSeconds: number;
/**
 * @description 规则详情
 **/
ruleDesc: string;
/**
 * @description 门店ID
 * @format int64
 **/
shopId: number;
/**
 * @description 签约状态 Y 已签约；N 未签约
 **/
signFlag: string;
/**
 * @description 已领取的红包任务ID
 * @format int64
 **/
taskAgreementId: number;
/**
 * @description 任务描述
 **/
taskDesc: string;
/**
 * @description 承诺任务
 **/
taskDetail: string;
/**
 * @description 任务ID
 * @format int64
 **/
taskId: number;
/**
 * @description 任务状态, WAIT_FINISH: 待完成，FINISHED:已完成, FAILED: 任务失败
 **/
taskStatus: string;
};
/**
 * @title CustomerTaskInfoVO
 **/
export type ZmsxMarketingComponentsSchemasCustomerTaskInfoVO = {
/**
 * @description 权益描述
 **/
benefitDesc: string;
/**
 * @description 当前用户是否领取
 **/
received: boolean;
/**
 * @description 红包金额: 元
 **/
redpkgFee: string;
/**
 * @description 规则详情
 **/
ruleDesc: string;
/**
 * @description 任务红包ID
 * @format int64
 **/
taskAgreementId: number;
/**
 * @description 任务描述
 **/
taskDesc: string;
/**
 * @description 承诺任务
 **/
taskDetail: string;
/**
 * @description 任务ID
 * @format int64
 **/
taskId: number;
/**
 * @description 模板Code
 **/
templateCode: string;
};
/**
 * @title KeywordDTO
 **/
export type ZmsxMarketingComponentsSchemasKeywordDTO = {
/**
 * @description 小程序ID
 * @format int64
 **/
appletId: number;
/**
 * @description 关键字
 **/
keyword: string;
};
/**
 * @title KeywordsVO
 **/
export type ZmsxMarketingComponentsSchemasKeywordsVO = {
/**
 * @description 审核结果描述
 **/
auditDesc: string;
/**
 * @description 审核状态,PASS: 通过，REJECT: 拒绝,AUDIT: 审核中
 **/
auditStatus: string;
/**
 * @description 审核时间
 **/
auditTime: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 关键词ID
 * @format int64
 **/
id: number;
/**
 * @description 搜索关键词
 **/
keyWord: string;
};
/**
 * @title QueryTemplateDTO
 **/
export type ZmsxMarketingComponentsSchemasQueryTemplateDTO = {
/**
 * @description OBTL001: 次数任务，OBTL002: 消费任务
 **/
templateType: string;
};
/**
 * @title RedPkgAccountVO
 **/
export type ZmsxMarketingComponentsSchemasRedPkgAccountVO = {
/**
 * @description 退还金额
 **/
backAmount: string;
/**
 * @description 坏账金额
 **/
badAmount: string;
/**
 * @description 余额
 **/
balanceAmount: string;
/**
 * @description 确认发出金额
 **/
confirmSendAmount: string;
/**
 * @description 冻结中金额
 **/
freezeAmount: string;
/**
 * @description 总充值金额
 **/
totalPayAmount: string;
};
/**
 * @title RedPkgReceiveLogsDTO
 **/
export type ZmsxMarketingComponentsSchemasRedPkgReceiveLogsDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 红包状态
 **/
redpkgStatus?: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId?: number;
/**
 * @description 任务状态
 **/
taskStatus?: string;
};
/**
 * @title RedpkgReceiveLogInfoVO
 **/
export type ZmsxMarketingComponentsSchemasRedpkgReceiveLogInfoVO = {
/**
 * @description 退换时间
 **/
backTime: string;
/**
 * @description 领取时间
 **/
createTime: string;
/**
 * @description 履约进度,如果是金额就是金额数量，如果是次数就是次数数量
 **/
finishProgress: string;
/**
 * @description 完成时间
 **/
finishTime: string;
/**
 * @description 手机号
 **/
mobile: string;
/**
 * @description 红包状态, WAIT_CFM:待确认,CFM_SEND: 确认发放, BACKING: 退换中，BACKED: 已退还
 **/
redpkgStatus: string;
/**
 * @description 红包金额
 **/
regpkgAmount: string;
/**
 * @description 任务内容
 **/
taskContent: string;
/**
 * @description 任务名称
 **/
taskName: string;
/**
 * @description 任务状态, WAIT_FINISH: 待完成，FINISHED:已完成, FAILED: 任务失败
 **/
taskStatus: string;
/**
 * @description 任务类型, OBTL001: 次数任务，OBTL002: 消费任务
 **/
taskType: string;
};
/**
 * @title RedpkgStatsInfoVO
 **/
export type ZmsxMarketingComponentsSchemasRedpkgStatsInfoVO = {
/**
 * @description 返还金额
 **/
backAmount: string;
/**
 * @description 坏账金额
 **/
badAmount: string;
/**
 * @description 完成次数
 * @format int32
 **/
finishCount: number;
/**
 * @description 领取金额
 **/
receiveAmount: string;
/**
 * @description 领取次数
 * @format int32
 **/
receiveCount: number;
};
/**
 * @title RedpkgTaskListVO
 **/
export type ZmsxMarketingComponentsSchemasRedpkgTaskListVO = {
/**
 * @description 权益描述
 **/
benefitDesc: string;
/**
 * @description 红包创建时间
 **/
createTime: string;
/**
 * @description 红包限领数量
 **/
limitNum: string;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 已领红包数量
 * @format int32
 **/
receivedNum: number;
/**
 * @description 红包金额
 **/
redpkgFee: string;
/**
 * @description 红包发放数量
 * @format int32
 **/
redpkgNum: number;
/**
 * @description 规则描述
 **/
ruleDesc: string;
/**
 * @description 门店ID
 * @format int64
 **/
shopId: number;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 任务内容
 **/
taskContent: string;
/**
 * @description 任务天数
 **/
taskDays: string;
/**
 * @description 任务描述
 **/
taskDetail: string;
/**
 * @description 任务ID
 * @format int64
 **/
taskId: number;
/**
 * @description 任务名称
 **/
taskName: string;
/**
 * @description 红包状态
 **/
taskStatus: string;
/**
 * @description 任务类型, OBTL001: 次数任务，OBTL002: 消费任务
 **/
taskType: string;
/**
 * @description 模板名称
 **/
templateName: string;
/**
 * @description 红包总金额
 **/
totalAmount: string;
};
/**
 * @title RedpkgTaskPageDTO
 **/
export type ZmsxMarketingComponentsSchemasRedpkgTaskPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商户名称
 **/
merchantName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId?: number;
/**
 * @description 店铺名称
 **/
shopName?: string;
/**
 * @description 任务名称
 **/
taskName?: string;
/**
 * @description 任务状态, WAIT_SEND: 未启动，SENDING: 发放中
 **/
taskStatus?: string;
/**
 * @description 任务类型  OBTL001：次数任务,  OBTL002：消费任务;
 **/
taskType?: string;
};
/**
 * @title SignRedPkgDTO
 **/
export type ZmsxMarketingComponentsSchemasSignRedPkgDTO = {
/**
 * @description 任务领取完成跳转回来的小程序路径，比如: page/xxxx/xxxxx，不需要带开始的'/',不传默认跳转到红包首页
 **/
returnUrl: string;
/**
 * @description 任务ID
 * @format int64
 **/
taskId: number;
};
/**
 * @title TaskDTO
 **/
export type ZmsxMarketingComponentsSchemasTaskDTO = {
/**
 * @description 权益描述
 **/
benefitDesc: string;
/**
 * @description 规则详情
 **/
ruleDesc: string;
/**
 * @description 发送数量
 **/
sendNum: string;
/**
 * @description 店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 承诺任务
 **/
taskDetail: string;
/**
 * @description 任务类型
 **/
taskType: string;
/**
 * @description 模板code
 **/
templateCode: string;
};
/**
 * @title TemplateSimpleVO
 **/
export type ZmsxMarketingComponentsSchemasTemplateSimpleVO = {
/**
 * @description 先享优惠
 **/
benefitDesc: string;
/**
 * @description 红包金额: 元
 **/
redpkgFee: string;
/**
 * @description 规则详情
 **/
ruleDesc: string;
/**
 * @description 任务目标, 如果是消费任务，这里就是最低消费金额: 元，如果是次数任务，这里就是最少完成次数: 次
 **/
target: string;
/**
 * @description 任务规则
 **/
taskDesc: string;
/**
 * @description 承诺任务
 **/
taskDetail: string;
/**
 * @description 模板code
 **/
templateCode: string;
/**
 * @description 模板名称
 **/
templateName: string;
/**
 * @description 任务类型
 **/
templateType: string;
/**
 * @description 任务期限: 天
 * @format int32
 **/
timePeriod: number;
};
/**
 * @title PageVO«BalanceLogVO»
 **/
export type ZmsxMarketingComponentsSchemasPageVO_BalanceLogVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMarketingComponentsSchemasBalanceLogVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«CaServiceVO»
 **/
export type ZmsxMarketingComponentsSchemasPageVO_CaServiceVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMarketingComponentsSchemasCaServiceVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«RedpkgReceiveLogInfoVO»
 **/
export type ZmsxMarketingComponentsSchemasPageVO_RedpkgReceiveLogInfoVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMarketingComponentsSchemasRedpkgReceiveLogInfoVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«RedpkgTaskListVO»
 **/
export type ZmsxMarketingComponentsSchemasPageVO_RedpkgTaskListVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxMarketingComponentsSchemasRedpkgTaskListVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«CaSearchBoxStatusVO»
 **/
export type ZmsxMarketingComponentsSchemasResult_CaSearchBoxStatusVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasCaSearchBoxStatusVO;
msg: string;
success: boolean;
};
/**
 * @title Result«CustomerReceiveTaskVO»
 **/
export type ZmsxMarketingComponentsSchemasResult_CustomerReceiveTaskVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasCustomerReceiveTaskVO;
msg: string;
success: boolean;
};
/**
 * @title Result«CustomerTaskInfoVO»
 **/
export type ZmsxMarketingComponentsSchemasResult_CustomerTaskInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasCustomerTaskInfoVO;
msg: string;
success: boolean;
};
/**
 * @title Result«List«CustomerReceiveTaskVO»»
 **/
export type ZmsxMarketingComponentsSchemasResult_List_CustomerReceiveTaskVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasCustomerReceiveTaskVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«CustomerTaskInfoVO»»
 **/
export type ZmsxMarketingComponentsSchemasResult_List_CustomerTaskInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasCustomerTaskInfoVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«KeywordsVO»»
 **/
export type ZmsxMarketingComponentsSchemasResult_List_KeywordsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasKeywordsVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«TemplateSimpleVO»»
 **/
export type ZmsxMarketingComponentsSchemasResult_List_TemplateSimpleVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasTemplateSimpleVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«BalanceLogVO»»
 **/
export type ZmsxMarketingComponentsSchemasResult_PageVO_BalanceLogVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasPageVO_BalanceLogVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«CaServiceVO»»
 **/
export type ZmsxMarketingComponentsSchemasResult_PageVO_CaServiceVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasPageVO_CaServiceVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«RedpkgReceiveLogInfoVO»»
 **/
export type ZmsxMarketingComponentsSchemasResult_PageVO_RedpkgReceiveLogInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasPageVO_RedpkgReceiveLogInfoVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«RedpkgTaskListVO»»
 **/
export type ZmsxMarketingComponentsSchemasResult_PageVO_RedpkgTaskListVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasPageVO_RedpkgTaskListVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«RedPkgAccountVO»
 **/
export type ZmsxMarketingComponentsSchemasResult_RedPkgAccountVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasRedPkgAccountVO;
msg: string;
success: boolean;
};
/**
 * @title Result«RedpkgStatsInfoVO»
 **/
export type ZmsxMarketingComponentsSchemasResult_RedpkgStatsInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxMarketingComponentsSchemasRedpkgStatsInfoVO;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxMarketingComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
/**
 * @title Result«double»
 **/
export type ZmsxMarketingComponentsSchemasResult_double_ = {
/**
 * @format int32
 **/
code: number;
/**
 * @format double
 **/
data: number;
msg: string;
success: boolean;
};
/**
 * @title Result«string»
 **/
export type ZmsxMarketingComponentsSchemasResult_string_ = {
/**
 * @format int32
 **/
code: number;
data: string;
msg: string;
success: boolean;
};
export interface PathsZmsxMarketing{'/marketing/b/redpkg/account': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_RedPkgAccountVO_;
};
};
'/marketing/b/redpkg/balance/logs': {post: {
param:{
/**
 * @description balanceLogPageDTO
 **/
body: ZmsxMarketingComponentsSchemasBalanceLogPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_PageVO_BalanceLogVO_;
};
};
'/marketing/b/redpkg/receive/logs': {post: {
param:{
/**
 * @description redPkgReceiveLogsDTO
 **/
body: ZmsxMarketingComponentsSchemasRedPkgReceiveLogsDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_PageVO_RedpkgReceiveLogInfoVO_;
};
};
'/marketing/b/redpkg/stats': {get: {
param:{query: {
/**
 * @description shopId
 * @format int64
 **/
shopId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_RedpkgStatsInfoVO_;
};
};
'/marketing/b/redpkg/task': {post: {
param:{
/**
 * @description redPkgReceiveLogsDTO
 **/
body: ZmsxMarketingComponentsSchemasRedpkgTaskPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_PageVO_RedpkgTaskListVO_;
};
};
'/marketing/b/redpkg/task/create': {post: {
param:{
/**
 * @description taskDTO
 **/
body: ZmsxMarketingComponentsSchemasTaskDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_PageVO_RedpkgTaskListVO_;
};
};
'/marketing/b/redpkg/task/status': {post: {
param:{
/**
 * @description changeTaskStatusDTO
 **/
body: ZmsxMarketingComponentsSchemasChangeTaskStatusDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
'/marketing/b/redpkg/template': {post: {
param:{
/**
 * @description queryTemplateDTO
 **/
body: ZmsxMarketingComponentsSchemasQueryTemplateDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_List_TemplateSimpleVO_;
};
};
'/marketing/c/redpkg/agreementDetail': {get: {
param:{query: {
/**
 * @description taskAgreementId
 * @format int64
 **/
taskAgreementId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_CustomerReceiveTaskVO_;
};
};
'/marketing/c/redpkg/cancelTask': {get: {
param:{query: {
/**
 * @description agreementId
 **/
agreementId: string;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
'/marketing/c/redpkg/list/myRedpkgs': {get: {
param:{query: {
/**
 * @description taskStatus
 **/
taskStatus?: string;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_List_CustomerReceiveTaskVO_;
};
};
'/marketing/c/redpkg/mylist': {get: {
param:{query: {
/**
 * @description taskStatus
 **/
taskStatus?: string;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_List_CustomerReceiveTaskVO_;
};
};
'/marketing/c/redpkg/presign': {post: {
param:{
/**
 * @description signRedPkgDTO
 **/
body: ZmsxMarketingComponentsSchemasSignRedPkgDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_string_;
};
};
'/marketing/c/redpkg/shop/available': {get: {
param:{query: {
/**
 * @description userId
 * @format int64
 **/
userId?: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_List_CustomerTaskInfoVO_;
};
};
'/marketing/c/redpkg/sign': {get: {
param:{query: {
/**
 * @description taskId
 * @format int64
 **/
taskId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
'/marketing/c/redpkg/taskAmountSum': {get: {
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_double_;
};
};
'/marketing/c/redpkg/taskDetail': {get: {
param:{query: {
/**
 * @description taskId
 * @format int64
 **/
taskId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_CustomerTaskInfoVO_;
};
};
'/marketing/console/redpkg/changeTaskStatus': {post: {
param:{
/**
 * @description changeTaskStatusDTO
 **/
body: ZmsxMarketingComponentsSchemasChangeTaskStatusDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
'/marketing/console/redpkg/page': {post: {
param:{
/**
 * @description redPkgReceiveLogsDTO
 **/
body: ZmsxMarketingComponentsSchemasRedpkgTaskPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_PageVO_RedpkgTaskListVO_;
};
};
'/marketing/console/redpkg/task/create': {post: {
param:{
/**
 * @description taskDTO
 **/
body: ZmsxMarketingComponentsSchemasTaskDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
'/marketing/console/redpkg/template': {post: {
param:{
/**
 * @description queryTemplateDTO
 **/
body: ZmsxMarketingComponentsSchemasQueryTemplateDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_List_TemplateSimpleVO_;
};
};
'/marketing/p/ca/keywords/add': {post: {
param:{
/**
 * @description keywordDTO
 **/
body: ZmsxMarketingComponentsSchemasKeywordDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_List_KeywordsVO_;
};
};
'/marketing/p/ca/keywords/page/{appletId}': {get: {
param:{path: {
/**
 * @description appletId
 * @format int64
 **/
appletId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_List_KeywordsVO_;
};
};
'/marketing/p/ca/keywords/{keywordId}': {delete: {
param:{path: {
/**
 * @description keywordId
 * @format int64
 **/
keywordId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_List_KeywordsVO_;
};
};
'/marketing/p/ca/service/add': {post: {
param:{
/**
 * @description caServiceDTO
 **/
body: ZmsxMarketingComponentsSchemasCaServiceDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
'/marketing/p/ca/service/invalid/{serviceId}': {post: {
param:{path: {
/**
 * @description serviceId
 * @format int64
 **/
serviceId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
'/marketing/p/ca/service/page': {post: {
param:{
/**
 * @description caServiceQueryDTO
 **/
body: ZmsxMarketingComponentsSchemasCaServiceQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_PageVO_CaServiceVO_;
};
};
'/marketing/p/ca/service/searchbox/{appletId}': {get: {
param:{path: {
/**
 * @description appletId
 * @format int64
 **/
appletId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_CaSearchBoxStatusVO_;
};
post: {
param:{path: {
/**
 * @description appletId
 * @format int64
 **/
appletId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
'/marketing/p/ca/service/{serviceId}': {delete: {
param:{path: {
/**
 * @description serviceId
 * @format int64
 **/
serviceId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxMarketingComponentsSchemasResult_Void_;
};
};
}

/**
 * @title AppDiscountCouponPageVO
 **/
export type ZmsxCouponComponentsSchemasAppDiscountCouponPageVO = {
/**
 * @description 活动ID
 **/
activityId: string;
/**
 * @description 面额
 **/
amount: string;
/**
 * @description 是否可以领取 true 可以领取  false 不可领取
 **/
receive: boolean;
/**
 * @description 券有效期
 **/
validityPeriod: string;
/**
 * @description 券详细使用说明
 **/
voucherDescription: string;
/**
 * @description 支付宝券ID
 **/
voucherId: string;
/**
 * @description 券名称
 **/
voucherName: string;
};
/**
 * @title AppMerchantVerifyDTO
 **/
export type ZmsxCouponComponentsSchemasAppMerchantVerifyDTO = {
/**
 * @description 卡号
 **/
cardNo?: string;
/**
 * @description 核销项目id
 **/
itemIds?: number[];
/**
 * @description 核销码
 **/
verifyCode: string;
};
/**
 * @title AppMerchantVerifyRecordDTO
 **/
export type ZmsxCouponComponentsSchemasAppMerchantVerifyRecordDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description (选择店铺后缓存的ID)核销店铺ID
 * @format int64
 **/
shopId: number;
/**
 * @description 核销时间
 **/
verifyDate: string;
};
/**
 * @title AppVerifyRecordPageDTO
 **/
export type ZmsxCouponComponentsSchemasAppVerifyRecordPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 核销码
 **/
verifyCode?: string;
};
/**
 * @title AppVerifyRecordVO
 **/
export type ZmsxCouponComponentsSchemasAppVerifyRecordVO = {
/**
 * @description 核销码
 **/
actualVerifyCode: string;
/**
 * @description 核销项目名称
 **/
itemNames: string;
/**
 * @description 消费门店
 **/
shopName: string;
/**
 * @description 余额
 **/
surplusAmount: string;
/**
 * @description 核销金额
 **/
verifyAmount: string;
/**
 * @description 核销时间
 **/
verifyTime: string;
};
/**
 * @title AppVerifyRecordsVO
 **/
export type ZmsxCouponComponentsSchemasAppVerifyRecordsVO = {
/**
 * @description 核销码
 **/
actualVerifyCode: string;
/**
 * @description 业务场景：COURSE 课程核销码; CLUB_CARD_TIMES核销次数; SAFETY_PAY 安心冲核销; RECEIVE 体验商品核销
 **/
businessScenario: string;
/**
 * @format int64
 **/
recordId: number;
/**
 * @description 核销金额
 **/
verifyAmount: string;
/**
 * @description 核销时间
 **/
verifyDate: string;
/**
 * @description 核销人员ID
 * @format int64
 **/
verifyEmpId: number;
/**
 * @description 核销人名称
 **/
verifyEmpName: string;
/**
 * @description 核销项目
 **/
verifyItems: string;
/**
 * @description 核销名称
 **/
verifyName: string;
/**
 * @description 核销单号
 **/
verifyNo: string;
/**
 * @description 核销次数
 * @format int32
 **/
verifyNum: number;
/**
 * @description 核销店铺ID
 * @format int64
 **/
verifyShopId: number;
/**
 * @description 核销店铺名称
 **/
verifyShopName: string;
};
/**
 * @title AvailableCouponVO
 **/
export type ZmsxCouponComponentsSchemasAvailableCouponVO = {
/**
 * @description 活动ID
 **/
activityId: string;
/**
 * @description 面额
 **/
amount: string;
/**
 * @description 是否可以领取 true 可以领取  false 不可领取
 **/
receive: boolean;
/**
 * @description 可用门店名称
 **/
shopName: string;
/**
 * @description 券有效期
 **/
validityPeriod: string;
/**
 * @description 券码
 **/
voucherCode: string;
/**
 * @description 券详细使用说明
 **/
voucherDescription: string;
/**
 * @description 券名称
 **/
voucherName: string;
};
/**
 * @title ClubCardEquityPageDTO
 **/
export type ZmsxCouponComponentsSchemasClubCardEquityPageDTO = {
/**
 * @description 卡类型：TIMES：次数卡，QUOTA 定额卡
 **/
cardType?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 是否可用 true 可用 false 不可用
 **/
enable?: boolean;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title ClubCardEquityVO
 **/
export type ZmsxCouponComponentsSchemasClubCardEquityVO = {
/**
 * @description 额度
 **/
balance: string;
/**
 * @description 会员卡ID
 * @format int64
 **/
cardId: number;
/**
 * @description 会员卡名称
 **/
cardName: string;
/**
 * @description 会员卡编码
 **/
cardNo: string;
/**
 * @description 卡状态 INVALID 失效；PENDING 未生效；VALID 有效；EXPIRE 已过期
 **/
cardStatus: string;
/**
 * @description 卡类型：TIMES：次数卡 ,QUOTA 定额卡
 **/
cardType: string;
/**
 * @description 折扣
 **/
discount: string;
/**
 * @description 有效期 为空则长期有效
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 面值
 **/
faceValue: string;
/**
 * @description 赠送面值
 **/
giveValue: string;
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 开卡时间
 **/
openDate: string;
/**
 * @description 到期时间
 **/
overdueDate: string;
/**
 * @description 核销码
 **/
verifyCode: string;
};
/**
 * @title ClubCardPageDTO
 **/
export type ZmsxCouponComponentsSchemasClubCardPageDTO = {
/**
 * @description 业务类型：SAFETY_PAY 安心冲；STAGE_PAY 阶段付; RECEIVE 体验商品；
 **/
bizType?: string;
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡 QUOTA 定额卡
 **/
cardType?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 是否可用 true 可用 false 不可用
 **/
enable?: boolean;
/**
 * @format int64
 **/
merchantId?: number;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @format int64
 **/
partnerId?: number;
/**
 * @format int64
 **/
shopId?: number;
/**
 * @format int64
 **/
userId?: number;
};
/**
 * @title ClubCardPageVO
 **/
export type ZmsxCouponComponentsSchemasClubCardPageVO = {
/**
 * @description 购买时间止
 **/
buyTime: string;
/**
 * @description 权益名称
 **/
cardName: string;
/**
 * @description 权益编码
 **/
cardNo: string;
/**
 * @description 权益类型
 **/
cardType: string;
/**
 * @description 折扣
 **/
discount: string;
/**
 * @description 赠送额度
 **/
giveBalance: string;
/**
 * @description 关联项目
 **/
itemNames: string;
/**
 * @description 有效期起 与有效期止组合展示为有效期起止时间
 **/
openDate: string;
/**
 * @description 价格
 **/
orderPrice: string;
/**
 * @description 有效期止 与有效期起组合展示为有效期起止时间
 **/
overdueDate: string;
/**
 * @description 关联门店
 **/
shopNames: string;
/**
 * @description 会员昵称
 **/
userNickName: string;
/**
 * @description 会员手机号
 **/
userTel: string;
};
/**
 * @title ClubCardTimesVO
 **/
export type ZmsxCouponComponentsSchemasClubCardTimesVO = {
/**
 * @description 卡名称
 **/
cardName: string;
/**
 * @description 扣款金额
 **/
deductionAmount: string;
/**
 * @description 开卡时间
 **/
openDate: string;
/**
 * @description 到期时间
 **/
overdueDate: string;
/**
 * @description 本金额度（次/分）
 * @format int32
 **/
quota: number;
/**
 * @description 本金剩余额度（次/分）
 * @format int32
 **/
remainTimes: number;
/**
 * @description 核销码
 **/
verifyCode: string;
};
/**
 * @title ClubCardVO
 **/
export type ZmsxCouponComponentsSchemasClubCardVO = {
/**
 * @description 会员卡ID
 * @format int64
 **/
cardId: number;
/**
 * @description 会员卡名称
 **/
cardName: string;
/**
 * @description 会员卡编码
 **/
cardNo: string;
/**
 * @description 卡状态 INVALID 失效；PENDING 未生效；VALID 有效；EXPIRE 已过期
 **/
cardStatus: string;
/**
 * @description 卡类型：TIMES：次数卡，PERIOD：周期卡, QUOTA 额度卡
 **/
cardType: string;
/**
 * @description 是否有核销码 true 有；false 无
 **/
checkCode: boolean;
/**
 * @description 有效期
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 使用说明
 **/
instructions: string;
/**
 * @description 商户PID
 **/
merchantPid: string;
/**
 * @description 开卡时间
 **/
openDate: string;
/**
 * @description 购卡金额
 **/
orderPrice: number;
/**
 * @description 到期时间
 **/
overdueDate: string;
/**
 * @description 额度
 * @format int32
 **/
quota: number;
/**
 * @description 剩余额度
 * @format int32
 **/
remainTimes: number;
/**
 * @description 商品编码
 **/
skuNo: string;
/**
 * @description 是否是阶段付会员卡
 **/
stagePay: boolean;
/**
 * @description 合约单编码
 **/
subscriptionNo: string;
/**
 * @description 订购类型 月卡 MONTH 次卡 TIME 预约 ADVANCE 周卡 WEEK 优惠月卡 DISCOUNT_MONTH 优惠周卡 DISCOUNT_WEEK 优惠次卡 DISCOUNT_TIME 装修模式 DECORATION 配送模式 DELIVERY
 **/
subscriptionType: string;
/**
 * @description 核销码
 **/
verifyCode: string;
/**
 * @description 核销计次
 * @format int32
 **/
verifyCount: number;
};
/**
 * @title CourseDetailVO
 **/
export type ZmsxCouponComponentsSchemasCourseDetailVO = {
/**
 * @description 难度级别：ENTRY:入门, BASE:基础,INTENSIFY:强化,ADVANCEMENT:进阶
 **/
courseLevel: string;
/**
 * @description 开课时间
 **/
courseTime: string;
/**
 * @description 教师名称
 **/
employeeName: string;
/**
 * @description 课程结束时间
 **/
endTime: string;
/**
 * @description 课程名称
 **/
name: string;
/**
 * @description 上课地点
 **/
place: string;
/**
 * @description 开课门店
 **/
shopName: string;
/**
 * @description 课程开始时间
 **/
startTime: string;
/**
 * @description 核销码
 **/
verifyCode: string;
};
/**
 * @title DataMarketDTO
 **/
export type ZmsxCouponComponentsSchemasDataMarketDTO = {
/**
 * @description 购买时间起
 **/
buyTimeBegin?: string;
/**
 * @description 购买时间止
 **/
buyTimeEnd?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 商户名称
 **/
merchantName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title DataMarketVO
 **/
export type ZmsxCouponComponentsSchemasDataMarketVO = {
/**
 * @description 补贴金额
 **/
subsidyAmount: string;
/**
 * @description 可提现
 **/
totalBalance: string;
/**
 * @description 收入
 **/
totalIncome: string;
/**
 * @description 已核销本金
 **/
totalVerifyAmount: string;
/**
 * @description 待核销本金
 **/
totalWaitVerifyAmount: string;
/**
 * @description 待核销赠送
 **/
totalWaitVerifyGiveAmount: string;
};
/**
 * @title DiscountCouponDTO
 **/
export type ZmsxCouponComponentsSchemasDiscountCouponDTO = {
/**
 * @description 活动名称
 **/
activityName: string;
/**
 * @description 面额
 **/
amount: number;
/**
 * @description 券发放数量
 * @format int32
 **/
couponNum: number;
/**
 * @description 门槛金额
 **/
floorAmount?: number;
/**
 * @description 券有效期 绝对时间: ABSOLUTE 相对时间: RELATIVE
 **/
periodType: string;
/**
 * @description 券发放结束时间
 **/
publishEndTime: string;
/**
 * @description 券发放开始时间
 **/
publishStartTime: string;
/**
 * @description 每人领取限制
 * @format int32
 **/
quantityLimitPerUser: number;
/**
 * @format int64
 **/
shopId: number;
/**
 * @description 券可使用的开始时间（绝对时间）
 **/
validBeginTime?: string;
/**
 * @description 领取后 N 天内可以使用
 * @format int32
 **/
validDaysAfterReceive?: number;
/**
 * @description 券可使用的开始时间（绝对时间）
 **/
validEndTime?: string;
/**
 * @description 券详细使用说明
 **/
voucherDescription: string;
/**
 * @description 券名称
 **/
voucherName: string;
/**
 * @description 券类型 满减券: FIX_VOUCHER 折扣券: DISCOUNT_VOUCHER 特价券: SPECIAL_VOUCHER 兑换券: EXCHANGE_VOUCHER
 **/
voucherType?: string;
};
/**
 * @title DiscountCouponPageDTO
 **/
export type ZmsxCouponComponentsSchemasDiscountCouponPageDTO = {
/**
 * @description 活动名称
 **/
activityName?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 券状态 WAIT_OPEN 待开始；ENABLE 已开始；OVER 已结束
 **/
couponStatus?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 券名称
 **/
voucherName?: string;
};
/**
 * @title DiscountCouponPageVO
 **/
export type ZmsxCouponComponentsSchemasDiscountCouponPageVO = {
/**
 * @description 活动名称
 **/
activityName: string;
/**
 * @description 面额
 **/
amount: string;
/**
 * @description 优惠券id
 * @format int64
 **/
couponId: number;
/**
 * @description 券码
 **/
couponNo: string;
/**
 * @description 券发放数量
 * @format int32
 **/
couponNum: number;
/**
 * @description 券状态 WAIT_OPEN 待开始；ENABLE 已开始；OVER 已结束
 **/
couponStatus: string;
/**
 * @description 门槛金额
 **/
floorAmount: string;
/**
 * @description 所属商户
 * @format int64
 **/
merchantId: number;
periodType: string;
/**
 * @description 券发放结束时间
 **/
publishEndTime: string;
/**
 * @description 券发放开始时间
 **/
publishStartTime: string;
/**
 * @description 每人领取限制
 **/
quantityLimitPerUser: string;
/**
 * @description 领取数量
 * @format int32
 **/
receiveNum: number;
/**
 * @description 所属门店
 **/
shopName: string;
/**
 * @description 券有效期
 **/
validityPeriod: string;
/**
 * @description 核销数量
 * @format int32
 **/
verifyNum: number;
/**
 * @description 券详细使用说明
 **/
voucherDescription: string;
/**
 * @description 券名称
 **/
voucherName: string;
/**
 * @description 券类型 满减券: FIX_VOUCHER 折扣券: DISCOUNT_VOUCHER 特价券: SPECIAL_VOUCHER 兑换券: EXCHANGE_VOUCHER
 **/
voucherType: string;
};
/**
 * @title EquityBalanceVO
 **/
export type ZmsxCouponComponentsSchemasEquityBalanceVO = {
/**
 * @description 卡名称
 **/
cardName: string;
/**
 * @description 折扣
 **/
discount: number;
/**
 * @description 有效期 为空则长期有效
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 赠送剩余额度（次/分）
 * @format int32
 **/
giveBalance: number;
/**
 * @description 赠送额度（次/分）
 * @format int32
 **/
giveValue: number;
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 开卡时间
 **/
openDate: string;
/**
 * @description 购卡金额（订单）
 **/
orderPrice: number;
/**
 * @description 到期时间
 **/
overdueDate: string;
/**
 * @description 本金额度（次/分）
 * @format int32
 **/
quota: number;
/**
 * @description 本金剩余额度（次/分）
 * @format int32
 **/
remainTimes: number;
/**
 * @description 核销码
 **/
verifyCode: string;
};
/**
 * @title MerchantClubCardPageDTO
 **/
export type ZmsxCouponComponentsSchemasMerchantClubCardPageDTO = {
/**
 * @description 购买时间起
 **/
buyTimeBegin?: string;
/**
 * @description 购买时间止
 **/
buyTimeEnd?: string;
/**
 * @description 权益名称
 **/
cardName?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title MerchantDataMarketVO
 **/
export type ZmsxCouponComponentsSchemasMerchantDataMarketVO = {
/**
 * @description 商户可提现
 **/
balance: string;
/**
 * @description 商户收入
 **/
income: string;
/**
 * @description 商户ID
 * @format int64
 **/
merchantId: number;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 补贴金额
 **/
subsidyAmount: string;
/**
 * @description 商户已核销本金
 **/
verifyAmount: string;
/**
 * @description 商户待核销本金
 **/
waitVerifyAmount: string;
/**
 * @description 商户待核销赠送
 **/
waitVerifyGiveAmount: string;
};
/**
 * @title MerchantVerifyRecordDTO
 **/
export type ZmsxCouponComponentsSchemasMerchantVerifyRecordDTO = {
/**
 * @description 权益编码
 **/
cardNo: string;
};
/**
 * @title OpenApiDTO
 **/
export type ZmsxCouponComponentsSchemasOpenApiDTO = {appId: string;
bizContent: string;
sign: string;
};
/**
 * @title PageDTO
 **/
export type ZmsxCouponComponentsSchemasPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title ReceiveCardVO
 **/
export type ZmsxCouponComponentsSchemasReceiveCardVO = {
/**
 * @description 卡名称
 **/
cardName: string;
/**
 * @description 有效期 为空则长期有效
 * @format int32
 **/
effectiveDay: number;
/**
 * @description 开卡时间
 **/
openDate: string;
/**
 * @description 到期时间
 **/
overdueDate: string;
/**
 * @description 本金额度（次/分）
 * @format int32
 **/
quota: number;
/**
 * @description 本金剩余额度（次/分）
 * @format int32
 **/
remainTimes: number;
/**
 * @description 核销码
 **/
verifyCode: string;
/**
 * @description 核销门店
 **/
verifyShopName: string;
};
/**
 * @title VerifyCodeDTO
 **/
export type ZmsxCouponComponentsSchemasVerifyCodeDTO = {
/**
 * @description 额度
 **/
quota: string;
/**
 * @description 核销码
 **/
verifyCode: string;
};
/**
 * @title VerifyRecordVO
 **/
export type ZmsxCouponComponentsSchemasVerifyRecordVO = {
/**
 * @description 核销名称
 **/
itemName: string;
/**
 * @description 消费门店
 **/
shopName: string;
/**
 * @description 余额
 **/
surplusAmount: string;
/**
 * @description 核销金额
 **/
verifyAmount: string;
/**
 * @description 核销时间
 **/
verifyTime: string;
};
/**
 * @title WaitVerifyVO
 **/
export type ZmsxCouponComponentsSchemasWaitVerifyVO = {
/**
 * @description 卡号
 **/
cardNo: string;
courseDetail: ZmsxCouponComponentsSchemasCourseDetailVO;
equityBalance: ZmsxCouponComponentsSchemasEquityBalanceVO;
receiveCardVO: ZmsxCouponComponentsSchemasReceiveCardVO;
/**
 * @description COURSE 课程核销码; STAGE_PAY 阶段付核销; SAFETY_PAY 权益；RECEIVE 聚合平台商品（服务商售出）
 **/
scenario: string;
timesCard: ZmsxCouponComponentsSchemasClubCardTimesVO;
};
/**
 * @title PageVO«AppDiscountCouponPageVO»
 **/
export type ZmsxCouponComponentsSchemasPageVO_AppDiscountCouponPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxCouponComponentsSchemasAppDiscountCouponPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppVerifyRecordVO»
 **/
export type ZmsxCouponComponentsSchemasPageVO_AppVerifyRecordVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxCouponComponentsSchemasAppVerifyRecordVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppVerifyRecordsVO»
 **/
export type ZmsxCouponComponentsSchemasPageVO_AppVerifyRecordsVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxCouponComponentsSchemasAppVerifyRecordsVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ClubCardEquityVO»
 **/
export type ZmsxCouponComponentsSchemasPageVO_ClubCardEquityVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxCouponComponentsSchemasClubCardEquityVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ClubCardPageVO»
 **/
export type ZmsxCouponComponentsSchemasPageVO_ClubCardPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxCouponComponentsSchemasClubCardPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«ClubCardVO»
 **/
export type ZmsxCouponComponentsSchemasPageVO_ClubCardVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxCouponComponentsSchemasClubCardVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«DiscountCouponPageVO»
 **/
export type ZmsxCouponComponentsSchemasPageVO_DiscountCouponPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxCouponComponentsSchemasDiscountCouponPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«MerchantDataMarketVO»
 **/
export type ZmsxCouponComponentsSchemasPageVO_MerchantDataMarketVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxCouponComponentsSchemasMerchantDataMarketVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«AvailableCouponVO»
 **/
export type ZmsxCouponComponentsSchemasResult_AvailableCouponVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasAvailableCouponVO;
msg: string;
success: boolean;
};
/**
 * @title Result«DataMarketVO»
 **/
export type ZmsxCouponComponentsSchemasResult_DataMarketVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasDataMarketVO;
msg: string;
success: boolean;
};
/**
 * @title Result«List«AvailableCouponVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_List_AvailableCouponVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasAvailableCouponVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«VerifyRecordVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_List_VerifyRecordVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasVerifyRecordVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppDiscountCouponPageVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_PageVO_AppDiscountCouponPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasPageVO_AppDiscountCouponPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppVerifyRecordVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_PageVO_AppVerifyRecordVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasPageVO_AppVerifyRecordVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppVerifyRecordsVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_PageVO_AppVerifyRecordsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasPageVO_AppVerifyRecordsVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ClubCardEquityVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_PageVO_ClubCardEquityVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasPageVO_ClubCardEquityVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ClubCardPageVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_PageVO_ClubCardPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasPageVO_ClubCardPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«ClubCardVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_PageVO_ClubCardVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasPageVO_ClubCardVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«DiscountCouponPageVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_PageVO_DiscountCouponPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasPageVO_DiscountCouponPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«MerchantDataMarketVO»»
 **/
export type ZmsxCouponComponentsSchemasResult_PageVO_MerchantDataMarketVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasPageVO_MerchantDataMarketVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«VerifyCodeDTO»
 **/
export type ZmsxCouponComponentsSchemasResult_VerifyCodeDTO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasVerifyCodeDTO;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxCouponComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
/**
 * @title Result«WaitVerifyVO»
 **/
export type ZmsxCouponComponentsSchemasResult_WaitVerifyVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxCouponComponentsSchemasWaitVerifyVO;
msg: string;
success: boolean;
};
export interface PathsZmsxCoupon{'/coupon/b/app/verifyRecord/page': {post: {
param:{
/**
 * @description recordDTO
 **/
body: ZmsxCouponComponentsSchemasAppMerchantVerifyRecordDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_PageVO_AppVerifyRecordsVO_;
};
};
'/coupon/b/app/verifyRecord/scamVerify': {post: {
param:{
/**
 * @description verifyDTO
 **/
body: ZmsxCouponComponentsSchemasAppMerchantVerifyDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_WaitVerifyVO_;
};
};
'/coupon/b/app/verifyRecord/verify': {put: {
param:{
/**
 * @description verifyDTO
 **/
body: ZmsxCouponComponentsSchemasAppMerchantVerifyDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_Void_;
};
};
'/coupon/b/clubCard/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxCouponComponentsSchemasMerchantClubCardPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_PageVO_ClubCardPageVO_;
};
};
'/coupon/b/clubCard/records': {post: {
param:{
/**
 * @description recordDTO
 **/
body: ZmsxCouponComponentsSchemasMerchantVerifyRecordDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_List_VerifyRecordVO_;
};
};
'/coupon/b/discountCoupon': {delete: {
param:{query: {
/**
 * @description couponId
 * @format int64
 **/
couponId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_Void_;
};
};
'/coupon/b/discountCoupon/editCoupon': {put: {
param:{
/**
 * @description couponDTO
 **/
body: ZmsxCouponComponentsSchemasDiscountCouponDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_Void_;
};
};
'/coupon/b/discountCoupon/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxCouponComponentsSchemasDiscountCouponPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_PageVO_DiscountCouponPageVO_;
};
};
'/coupon/b/discountCoupon/stopCoupon': {get: {
param:{query: {
/**
 * @description couponId
 * @format int64
 **/
couponId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_Void_;
};
};
'/coupon/c/app/coupon/equityPage': {post: {
param:{
/**
 * @description equityPageDTO
 **/
body: ZmsxCouponComponentsSchemasClubCardEquityPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_PageVO_ClubCardEquityVO_;
};
};
'/coupon/c/app/coupon/getVerifyCode': {get: {
param:{query: {
/**
 * @description verifyCode
 **/
verifyCode: string;
};
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_VerifyCodeDTO_;
};
};
'/coupon/c/app/coupon/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxCouponComponentsSchemasClubCardPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_PageVO_ClubCardVO_;
};
};
'/coupon/c/app/coupon/verifyRecords': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxCouponComponentsSchemasAppVerifyRecordPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_PageVO_AppVerifyRecordVO_;
};
};
'/coupon/c/app/discountCoupon/availableCoupon': {get: {
param:{query: {
/**
 * @description orderAmount
 **/
orderAmount: number;
};
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_List_AvailableCouponVO_;
};
};
'/coupon/c/app/discountCoupon/detail': {get: {
param:{query: {
/**
 * @description activityId
 **/
activityId: string;
};
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_AvailableCouponVO_;
};
};
'/coupon/c/app/discountCoupon/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxCouponComponentsSchemasPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_PageVO_AppDiscountCouponPageVO_;
};
};
'/coupon/console/market': {post: {
param:{
/**
 * @description marketDTO
 **/
body: ZmsxCouponComponentsSchemasDataMarketDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_DataMarketVO_;
};
};
'/coupon/console/market/merchant/dataMarket': {post: {
param:{
/**
 * @description marketDTO
 **/
body: ZmsxCouponComponentsSchemasDataMarketDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_PageVO_MerchantDataMarketVO_;
};
};
'/coupon/open/verify': {post: {
param:{
/**
 * @description openApiDTO
 **/
body: ZmsxCouponComponentsSchemasOpenApiDTO;
}
/**
 * @description OK
 **/
response: ZmsxCouponComponentsSchemasResult_Void_;
};
};
}

/**
 * @title BrowseGoodsDTO
 **/
export type ZmsxDataComponentsSchemasBrowseGoodsDTO = {
/**
 * @description 商品ID
 * @format int64
 **/
goodsId: number;
/**
 * @description 商品名称
 **/
goodsName: string;
};
/**
 * @title BrowseToPayStaticsVO
 **/
export type ZmsxDataComponentsSchemasBrowseToPayStaticsVO = {data: ZmsxDataComponentsSchemasBrowseToPayVO[];
/**
 * @description 统计图 第一天
 **/
firstDay: string;
/**
 * @description 统计图 最后一天
 **/
lastDay: string;
};
/**
 * @title BrowseToPayVO
 **/
export type ZmsxDataComponentsSchemasBrowseToPayVO = {
/**
 * @description 成交额
 * @format double
 **/
amount: number;
/**
 * @description 浏览量
 * @format double
 **/
browseNumber: number;
/**
 * @description 商品名称
 **/
goodsName: string;
/**
 * @description 成交转换率
 * @format double
 **/
payRate: number;
/**
 * @description 气泡大小
 * @format double
 **/
size: number;
};
/**
 * @title LineStaticsVO
 **/
export type ZmsxDataComponentsSchemasLineStaticsVO = {
/**
 * @description 统计图 数据
 **/
data: number[];
/**
 * @description 统计图 第一天
 **/
firstDay: string;
/**
 * @description 统计图 最后一天
 **/
lastDay: string;
xaxis: string[];
};
/**
 * @title OrderTradeSeriesVO
 **/
export type ZmsxDataComponentsSchemasOrderTradeSeriesVO = {
/**
 * @description 统计图 统计项数据
 **/
data: {[x: string | number]: any}[];
/**
 * @description 统计图 统计项
 **/
name: string;
};
/**
 * @title OrderTradeStaticsVO
 **/
export type ZmsxDataComponentsSchemasOrderTradeStaticsVO = {
/**
 * @description 统计图 第一天
 **/
firstDay: string;
/**
 * @description 统计图 最后一天
 **/
lastDay: string;
/**
 * @description 统计图 系列
 **/
series: ZmsxDataComponentsSchemasOrderTradeSeriesVO[];
xaxis: string[];
};
/**
 * @title OverviewVO
 **/
export type ZmsxDataComponentsSchemasOverviewVO = {
/**
 * @description 增长率
 **/
growthRate: string;
/**
 * @description 增长率标识
 **/
growthRateFlag: string;
/**
 * @description 概览 名称
 **/
name: string;
/**
 * @description 今天数据
 * @format double
 **/
todayData: number;
/**
 * @format double
 **/
ydayData: number;
};
/**
 * @title PieSeriesVO
 **/
export type ZmsxDataComponentsSchemasPieSeriesVO = {
/**
 * @description 统计图 统计项
 **/
name: string;
/**
 * @description 统计图 统计项数据
 * @format double
 **/
value: number;
};
/**
 * @title PieStaticsVO
 **/
export type ZmsxDataComponentsSchemasPieStaticsVO = {
/**
 * @description 统计图 数据
 **/
data: ZmsxDataComponentsSchemasPieSeriesVO[];
/**
 * @description 统计图 第一天
 **/
firstDay: string;
/**
 * @description 统计图 最后一天
 **/
lastDay: string;
/**
 * @description 统计图 统计项
 **/
legend: string[];
};
/**
 * @title TradePriceStaticsVO
 **/
export type ZmsxDataComponentsSchemasTradePriceStaticsVO = {
/**
 * @description 统计图 第一天
 **/
firstDay: string;
/**
 * @description 统计图 最后一天
 **/
lastDay: string;
/**
 * @description 统计图 数据
 **/
tradePriceVos: ZmsxDataComponentsSchemasTradePriceVO[];
};
/**
 * @title TradePriceVO
 **/
export type ZmsxDataComponentsSchemasTradePriceVO = {
/**
 * @description 排名
 * @format int32
 **/
orderNo: number;
/**
 * @description 们店名称
 **/
shopName: string;
/**
 * @description 成交金额
 * @format double
 **/
tradeAmount: number;
/**
 * @description 成交人数
 * @format int32
 **/
tradeNum: number;
/**
 * @description 成交客单价
 * @format double
 **/
tradePrice: number;
};
/**
 * @title Result«BrowseToPayStaticsVO»
 **/
export type ZmsxDataComponentsSchemasResult_BrowseToPayStaticsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxDataComponentsSchemasBrowseToPayStaticsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«LineStaticsVO»
 **/
export type ZmsxDataComponentsSchemasResult_LineStaticsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxDataComponentsSchemasLineStaticsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«Map«string,OverviewVO»»
 **/
export type ZmsxDataComponentsSchemasResult_Map_string_OverviewVO_ = {
/**
 * @format int32
 **/
code: number;
data: {[x: string | number]: ZmsxDataComponentsSchemasOverviewVO;
};
msg: string;
success: boolean;
};
/**
 * @title Result«OrderTradeStaticsVO»
 **/
export type ZmsxDataComponentsSchemasResult_OrderTradeStaticsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxDataComponentsSchemasOrderTradeStaticsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«PieStaticsVO»
 **/
export type ZmsxDataComponentsSchemasResult_PieStaticsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxDataComponentsSchemasPieStaticsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«TradePriceStaticsVO»
 **/
export type ZmsxDataComponentsSchemasResult_TradePriceStaticsVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxDataComponentsSchemasTradePriceStaticsVO;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxDataComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
export interface PathsZmsxData{'/data/b/data/browseToPayStatics': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_BrowseToPayStaticsVO_;
};
};
'/data/b/data/goodsHitsChart': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_LineStaticsVO_;
};
};
'/data/b/data/goodsOrderRate': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_PieStaticsVO_;
};
};
'/data/b/data/goodsSalesChart': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_PieStaticsVO_;
};
};
'/data/b/data/newAndOldUser': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_PieStaticsVO_;
};
};
'/data/b/data/orderNumStatics': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_LineStaticsVO_;
};
};
'/data/b/data/orderTypeRate': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_PieStaticsVO_;
};
};
'/data/b/data/overview': {get: {
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_Map_string_OverviewVO_;
};
};
'/data/b/data/shopsHitsChart': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_LineStaticsVO_;
};
};
'/data/b/data/tradePriceStatics': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_TradePriceStaticsVO_;
};
};
'/data/b/data/tradeStatics': {get: {
param:{query: {
/**
 * @description type
 **/
type: string;
};
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_OrderTradeStaticsVO_;
};
};
'/data/c/browse/goods': {post: {
param:{
/**
 * @description browseGoodsDTO
 **/
body: ZmsxDataComponentsSchemasBrowseGoodsDTO;
}
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_Void_;
};
};
'/data/c/browse/shop': {get: {
/**
 * @description OK
 **/
response: ZmsxDataComponentsSchemasResult_Void_;
};
};
}

/**
 * @title ActivityStatusVO
 **/
export type ZmsxActivityComponentsSchemasActivityStatusVO = {
/**
 * @description 线下活动任务是否领取 true 已领取 ,false 未领取
 **/
gameTask: boolean;
/**
 * @description 签到任务是否领取 true 已领取；false 未领取
 **/
signTask: boolean;
};
/**
 * @title PageDTO
 **/
export type ZmsxActivityComponentsSchemasPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title SubsidyRecordVO
 **/
export type ZmsxActivityComponentsSchemasSubsidyRecordVO = {
/**
 * @description 业务名称
 **/
bizName: string;
/**
 * @description 创建时间
 * @format date-time
 **/
createTime: string;
/**
 * @description 业务主单金额
 **/
mainOrderAmount: number;
/**
 * @description 商户名称
 **/
merchantName: string;
/**
 * @description 业务子单金额
 **/
outSubOrderAmount: number;
/**
 * @description 记录流水号
 **/
serialNo: string;
/**
 * @description 门店名称
 **/
shopName: string;
/**
 * @description 补贴金额
 **/
subsidyAmount: number;
subsidyRule: ZmsxActivityComponentsSchemasSubsidyRuleVO;
};
/**
 * @title SubsidyRuleVO
 **/
export type ZmsxActivityComponentsSchemasSubsidyRuleVO = {
/**
 * @description 补贴比例(xx.xx%)，小数点后4位
 **/
subsidyRatio: number;
/**
 * @description 补贴方式，补贴前置: SUBSIDY_PRE, 补贴后置: SUBSIDY_POST, 按实际核销比例补贴:SUBSIDY_ACTUAL_USE
 **/
subsidyType: string;
};
/**
 * @title PageVO«SubsidyRecordVO»
 **/
export type ZmsxActivityComponentsSchemasPageVO_SubsidyRecordVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxActivityComponentsSchemasSubsidyRecordVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«ActivityStatusVO»
 **/
export type ZmsxActivityComponentsSchemasResult_ActivityStatusVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxActivityComponentsSchemasActivityStatusVO;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«SubsidyRecordVO»»
 **/
export type ZmsxActivityComponentsSchemasResult_PageVO_SubsidyRecordVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxActivityComponentsSchemasPageVO_SubsidyRecordVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«boolean»
 **/
export type ZmsxActivityComponentsSchemasResult_boolean_ = {
/**
 * @format int32
 **/
code: number;
data: boolean;
msg: string;
success: boolean;
};
export interface PathsZmsxActivity{'/activity/b/console/subsidy/record/page': {post: {
param:{
/**
 * @description dto
 **/
body: ZmsxActivityComponentsSchemasPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxActivityComponentsSchemasResult_PageVO_SubsidyRecordVO_;
};
};
'/activity/c/activity/sign': {get: {
param:{query: {
/**
 * @description 活动类型 SIGN 签到活动；GAME_TASK 线下游戏任务
 **/
activityType: string;
};
}
/**
 * @description OK
 **/
response: ZmsxActivityComponentsSchemasResult_boolean_;
};
};
'/activity/c/activity/signDetail': {get: {
param:{query: {
/**
 * @description 活动类型 SIGN 签到活动；GAME_TASK 线下游戏任务
 **/
activityType: string;
};
}
/**
 * @description OK
 **/
response: ZmsxActivityComponentsSchemasResult_ActivityStatusVO_;
};
};
}

/**
 * @title ActualPutInfoVO
 **/
export type ZmsxSupplierComponentsSchemasActualPutInfoVO = {
/**
 * @description 实际投放信息
 **/
actualPuts: ZmsxSupplierComponentsSchemasActualPutVO0[];
/**
 * @description 派单ID
 * @format int64
 **/
dispatchOrderId: number;
/**
 * @description 派单编码
 * @format int64
 **/
dispatchOrderNo: number;
/**
 * @description 派单状态 WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消 为空表示无效
 **/
dispatchStatus: string;
/**
 * @description 供应商ID
 * @format int64
 **/
supplierId: number;
/**
 * @description 供应商名称
 **/
supplierName: string;
};
/**
 * @title ActualPutVO
 **/
export type ZmsxSupplierComponentsSchemasActualPutVO = {
/**
 * @description 实际刊位
 * @format int32
 **/
actualPrintNum: number;
/**
 * @description 社区名称
 **/
communityName: string;
/**
 * @description 下刊时间
 **/
overTime: string;
/**
 * @description 预计刊位
 * @format int32
 **/
predictPrintNum: number;
/**
 * @description 投放信息ID
 * @format int64
 **/
putInfoId: number;
/**
 * @description 投放周期（周）
 * @format int32
 **/
putPeriod: number;
/**
 * @description 投放单价
 **/
putPrice: string;
/**
 * @description 上刊时间
 **/
putTime: string;
/**
 * @description 投放总价（社区维度）
 **/
totalAmount: string;
};
/**
 * @title ActualPutVO0
 **/
export type ZmsxSupplierComponentsSchemasActualPutVO0 = {
/**
 * @description 实际刊位
 * @format int32
 **/
actualPrintNum: number;
/**
 * @description 社区名称
 **/
communityName: string;
/**
 * @description 下刊时间
 **/
overTime: string;
/**
 * @description 预计刊位
 * @format int32
 **/
predictPrintNum: number;
/**
 * @description 投放信息ID
 * @format int64
 **/
putInfoId: number;
/**
 * @description 投放周期
 * @format int32
 **/
putPeriod: number;
/**
 * @description 投放单价
 **/
putPrice: number;
/**
 * @description 上刊时间
 **/
putTime: string;
};
/**
 * @title AdOrderDTO
 **/
export type ZmsxSupplierComponentsSchemasAdOrderDTO = {
/**
 * @description 所选社区ID合集
 **/
communityIds: number[];
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 投放周期
 * @format int32
 **/
period: number;
/**
 * @description 投放方式 ELEVATOR 一梯一刊；BUILDING 一栋一刊
 **/
putType?: string;
};
/**
 * @title AdOrderDetailVO
 **/
export type ZmsxSupplierComponentsSchemasAdOrderDetailVO = {
/**
 * @description 订单金额
 **/
adOrderAmount: string;
/**
 * @description 广告单编号
 **/
adOrderNo: string;
/**
 * @description 订单状态 WAIT_PAY 待支付；PAYING 支付中；WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
adOrderStatus: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 下单时间
 **/
createTime: string;
/**
 * @description 广告素材 为空则表示未上传
 **/
material: string;
/**
 * @description 广告投放订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 投放周期
 * @format int32
 **/
period: number;
/**
 * @description 投放信息
 **/
putInfos: ZmsxSupplierComponentsSchemasPutInfoVO[];
/**
 * @description 投放方式 ELEVATOR 一梯一刊；BUILDING 一栋一刊
 **/
putType: string;
/**
 * @description 退款金额
 **/
refundAmount: string;
report: ZmsxSupplierComponentsSchemasPutReportVO;
/**
 * @description 实际投放刊位总数
 * @format int32
 **/
totalActualPrintNum: number;
};
/**
 * @title AdOrderPageDTO
 **/
export type ZmsxSupplierComponentsSchemasAdOrderPageDTO = {
/**
 * @description 订单状态 WAIT_PAY 待支付；WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
adOrderStatus?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title AdOrderPageVO
 **/
export type ZmsxSupplierComponentsSchemasAdOrderPageVO = {
/**
 * @description 订单金额
 **/
adOrderAmount: string;
/**
 * @description 广告单编号
 **/
adOrderNo: string;
/**
 * @description 订单状态 WAIT_PAY 待支付；PAYING 支付中；WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
adOrderStatus: string;
/**
 * @description 投放社区
 **/
communityNames: string;
/**
 * @description 广告素材 为空则表示未上传
 **/
material: string;
/**
 * @description 广告投放订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 投放周期
 * @format int32
 **/
period: number;
/**
 * @description 投放方式 ELEVATOR 一梯一刊；BUILDING 一栋一刊
 **/
putType: string;
};
/**
 * @title AppCommunityDetailQueryDTO
 **/
export type ZmsxSupplierComponentsSchemasAppCommunityDetailQueryDTO = {
/**
 * @description 社区id
 * @format int64
 **/
id: number;
/**
 * @description 纬度
 * @format double
 **/
latitude?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
};
/**
 * @title AppCommunityDetailVO
 **/
export type ZmsxSupplierComponentsSchemasAppCommunityDetailVO = {
/**
 * @description 社区地址
 **/
address: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 楼栋数
 * @format int32
 **/
buildingNumber: number;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 社区编码
 **/
code: string;
/**
 * @description 社区图集 字符串
 **/
covers: string;
/**
 * @description 距离（KM）
 * @format double
 **/
distance: number;
/**
 * @description 电梯数
 * @format int32
 **/
elevatorNumber: number;
/**
 * @description 楼层信息
 **/
floorInfo: string;
/**
 * @description 平均房价
 **/
housePrice: number;
/**
 * @description 居住规模（户）
 * @format int32
 **/
householdNumber: number;
/**
 * @description 社区id
 * @format int64
 **/
id: number;
/**
 * @description 纬度
 * @format double
 **/
latitude: number;
/**
 * @description 社区图集 数组
 **/
listCovers: string[];
/**
 * @description 经度
 * @format double
 **/
longitude: number;
/**
 * @description 社区名称
 **/
name: string;
/**
 * @description 居住率
 **/
occupancyRate: string;
/**
 * @description 居住规模（人）
 * @format int32
 **/
personNumber: number;
/**
 * @description 刊位价格
 **/
price: string;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 刊位数
 * @format int32
 **/
publicationNumber: number;
/**
 * @description 意向单id
 * @format int64
 **/
purposeId: number;
/**
 * @description 供应商名称
 **/
supplierName: string;
/**
 * @description 社区分类 DWELLING:住宅,BUSINESS_LIVING:商住楼, MULTIPLE_USE:综合楼,OFFICE:写字楼;
 **/
type: string;
};
/**
 * @title AppCommunityListDTO
 **/
export type ZmsxSupplierComponentsSchemasAppCommunityListDTO = {
/**
 * @description 市编码
 **/
cityCode: string;
/**
 * @description 纬度
 * @format double
 **/
latitude?: number;
/**
 * @description 范围级别 1-12越小 范围越大
 * @format int32
 **/
level?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @format double
 **/
maxLat?: number;
/**
 * @format double
 **/
maxLon?: number;
/**
 * @format double
 **/
minLat?: number;
/**
 * @format double
 **/
minLon?: number;
};
/**
 * @title AppCommunityQueryDTO
 **/
export type ZmsxSupplierComponentsSchemasAppCommunityQueryDTO = {
/**
 * @description 区域
 **/
areaCodes?: string[];
/**
 * @description 市编码
 **/
cityCode: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 纬度
 * @format double
 **/
latitude?: number;
/**
 * @description 范围级别 1-12越小 范围越大
 * @format int32
 **/
level?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @format double
 **/
maxLat?: number;
/**
 * @format double
 **/
maxLon?: number;
/**
 * @format double
 **/
minLat?: number;
/**
 * @format double
 **/
minLon?: number;
/**
 * @description 社区名称
 **/
name?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 省编码
 **/
provinceCode?: string;
/**
 * @description 社区分类 DWELLING:住宅,BUSINESS_LIVING:商住楼, MULTIPLE_USE:综合楼,OFFICE:写字楼;
 **/
types?: string[];
};
/**
 * @title AppCommunityVO
 **/
export type ZmsxSupplierComponentsSchemasAppCommunityVO = {
/**
 * @description 社区地址
 **/
address: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 楼栋数
 * @format int32
 **/
buildingNumber: number;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 社区编码
 **/
code: string;
/**
 * @description 社区图集-字符串
 **/
covers: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 距离（KM）
 * @format double
 **/
distance: number;
/**
 * @description 电梯数
 * @format int32
 **/
elevatorNumber: number;
/**
 * @description 楼层信息
 **/
floorInfo: string;
/**
 * @description 平均房价
 **/
housePrice: number;
/**
 * @description 居住规模（户）
 * @format int32
 **/
householdNumber: number;
/**
 * @description 社区id
 * @format int64
 **/
id: number;
/**
 * @description 纬度
 * @format double
 **/
latitude: number;
/**
 * @description 社区图集-数组
 **/
listCovers: string[];
/**
 * @description 经度
 * @format double
 **/
longitude: number;
/**
 * @description 社区名称
 **/
name: string;
/**
 * @description 居住率
 **/
occupancyRate: string;
/**
 * @description 居住规模（人）
 * @format int32
 **/
personNumber: number;
/**
 * @description 刊位价格
 **/
price: string;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 刊位数
 * @format int32
 **/
publicationNumber: number;
/**
 * @description 供应商名称
 **/
supplierName: string;
/**
 * @description 社区分类 DWELLING:住宅,BUSINESS_LIVING:商住楼, MULTIPLE_USE:综合楼,OFFICE:写字楼;
 **/
type: string;
};
/**
 * @title BaseEntityIdDTO
 **/
export type ZmsxSupplierComponentsSchemasBaseEntityIdDTO = {
/**
 * @description 主键id
 * @format int64
 **/
id: number;
};
/**
 * @title ChangePutInfoDTO
 **/
export type ZmsxSupplierComponentsSchemasChangePutInfoDTO = {
/**
 * @description 实际投放刊位
 * @format int32
 **/
actualPrintNum: number;
/**
 * @description 投放信息ID
 * @format int64
 **/
putInfoId: number;
/**
 * @description 上刊时间
 **/
putTime: string;
};
/**
 * @title CheckAuditDTO
 **/
export type ZmsxSupplierComponentsSchemasCheckAuditDTO = {
/**
 * @description 派单编号
 **/
dispatchOrderNo: string;
/**
 * @description 审核列主键id
 * @format int64
 **/
id: number;
/**
 * @description 驳回说明 驳回时传
 **/
rejectInfo: string;
/**
 * @description PASSED 通过, REJECT 驳回)
 **/
state: string;
};
/**
 * @title CommunityDTO
 **/
export type ZmsxSupplierComponentsSchemasCommunityDTO = {
/**
 * @description 社区地址
 **/
address: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 楼栋数
 * @format int32
 **/
buildingNumber: number;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 社区图集
 **/
covers?: string[];
/**
 * @description 电梯数
 * @format int32
 **/
elevatorNumber: number;
/**
 * @description 楼层
 **/
floorInfo: string;
/**
 * @description 平均房价
 * @format int32
 **/
housePrice: number;
/**
 * @description 居住规模（户）
 * @format int32
 **/
householdNumber: number;
/**
 * @description 社区id，编辑时必传
 * @format int64
 **/
id?: number;
/**
 * @description 纬度
 * @format double
 **/
latitude: number;
/**
 * @description 经度
 * @format double
 **/
longitude: number;
/**
 * @description 社区名称
 **/
name?: string;
/**
 * @description 入住率
 **/
occupancyRate: number;
/**
 * @description 居住规模（人）
 * @format int32
 **/
personNumber: number;
/**
 * @description 电梯刊位报价
 **/
price: number;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 电梯刊位数
 * @format int32
 **/
publicationNumber: number;
/**
 * @description 社区分类 DWELLING:住宅,BUSINESS_LIVING:商住楼, MULTIPLE_USE:综合楼,OFFICE:写字楼;
 **/
type: string;
};
/**
 * @title CommunityQueryDTO
 **/
export type ZmsxSupplierComponentsSchemasCommunityQueryDTO = {
/**
 * @description 社区地址
 **/
address?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 电梯数-止
 * @format int32
 **/
elevatorNumberEnd?: number;
/**
 * @description 电梯数-起
 * @format int32
 **/
elevatorNumberStart?: number;
/**
 * @description 社区名称
 **/
name?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 社区分类 DWELLING:住宅,BUSINESS_LIVING:商住楼, MULTIPLE_USE:综合楼,OFFICE:写字楼;
 **/
type?: string;
};
/**
 * @title CommunityVO
 **/
export type ZmsxSupplierComponentsSchemasCommunityVO = {
/**
 * @description 社区地址
 **/
address: string;
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 所在区编码
 **/
areaCode: string;
/**
 * @description 楼栋数
 * @format int32
 **/
buildingNumber: number;
/**
 * @description 所在市
 **/
city: string;
/**
 * @description 所在市编码
 **/
cityCode: string;
/**
 * @description 社区编码
 **/
code: string;
covers: string;
/**
 * @description 电梯数
 * @format int32
 **/
elevatorNumber: number;
/**
 * @description 楼层
 **/
floorInfo: string;
/**
 * @description 平均房价
 **/
housePrice: string;
/**
 * @description 居住规模（户）
 * @format int32
 **/
householdNumber: number;
/**
 * @description 社区id
 * @format int64
 **/
id: number;
/**
 * @description 纬度
 * @format double
 **/
latitude: number;
/**
 * @description 社区图集
 **/
listCovers: string[];
/**
 * @description 经度
 * @format double
 **/
longitude: number;
/**
 * @description 社区名称
 **/
name: string;
/**
 * @description 居住率
 **/
occupancyRate: string;
/**
 * @description 居住规模（人）
 * @format int32
 **/
personNumber: number;
/**
 * @description 刊位价格
 **/
price: string;
/**
 * @description 所在省份
 **/
province: string;
/**
 * @description 所在省份编码
 **/
provinceCode: string;
/**
 * @description 刊位数
 * @format int32
 **/
publicationNumber: number;
/**
 * @description 供应商id
 * @format int64
 **/
supplierId: number;
/**
 * @description 社区分类 DWELLING:住宅,BUSINESS_LIVING:商住楼, MULTIPLE_USE:综合楼,OFFICE:写字楼;
 **/
type: string;
/**
 * @description 最近更新时间
 **/
updateTime: string;
};
/**
 * @title ExcelCommunitiesVO
 **/
export type ZmsxSupplierComponentsSchemasExcelCommunitiesVO = {
/**
 * @description 新增社区
 **/
createCommunities: ZmsxSupplierComponentsSchemasExcelCommunityVO[];
/**
 * @description 新增数量
 * @format int32
 **/
createNumber: number;
/**
 * @description 更新社区
 **/
updateCommunities: ZmsxSupplierComponentsSchemasExcelCommunityVO[];
/**
 * @description 更新数量
 * @format int32
 **/
updateNumber: number;
};
/**
 * @title ExcelCommunityVO
 **/
export type ZmsxSupplierComponentsSchemasExcelCommunityVO = {
/**
 * @description 社区地址
 **/
address: string;
/**
 * @description 楼栋数
 **/
buildingNumber: string;
/**
 * @description 电梯数
 **/
elevatorNumber: string;
/**
 * @description 楼层
 **/
floorInfo: string;
/**
 * @description 平均房价（￥）
 **/
housePrice: string;
/**
 * @description 居住规模（户）
 **/
householdNumber: string;
/**
 * @description 社区名称
 **/
name: string;
/**
 * @description 入驻率（%）
 **/
occupancyRate: string;
/**
 * @description 居住规模（人）
 **/
personNumber: string;
/**
 * @description 电梯刊位报价
 **/
price: string;
/**
 * @description 电梯刊位数
 **/
publicationNumber: string;
/**
 * @description 社区分类 DWELLING:住宅,BUSINESS_LIVING:商住楼, MULTIPLE_USE:综合楼,OFFICE:写字楼;
 **/
type: string;
};
/**
 * @title OrderDetailVO
 **/
export type ZmsxSupplierComponentsSchemasOrderDetailVO = {
/**
 * @description 实际投放总金额
 **/
actualAmount: string;
/**
 * @description 实际投放信息
 **/
actualPutInfos: ZmsxSupplierComponentsSchemasActualPutInfoVO[];
/**
 * @description 实际投放刊位总数
 * @format int32
 **/
actualPutNum: number;
/**
 * @description 订单金额
 **/
adOrderAmount: string;
/**
 * @description 广告单编号
 **/
adOrderNo: string;
/**
 * @description 订单状态 WAIT_PAY 待支付；WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
adOrderStatus: string;
/**
 * @description 取消描述
 **/
cancelDesc: string;
/**
 * @description 取消时间
 **/
cancelTime: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 下单时间
 **/
createTime: string;
/**
 * @description 广告素材
 **/
material: string;
/**
 * @description 广告投放订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 完成时间
 **/
overTime: string;
/**
 * @description 支付流水号
 **/
payNo: string;
/**
 * @description 付款时间
 **/
payTime: string;
/**
 * @description 支付类型，ALIPAY:  支付宝，WECHAT: 微信支付
 **/
payType: string;
/**
 * @description 投放周期
 * @format int32
 **/
period: number;
/**
 * @description 预计投放信息
 **/
putInfos: ZmsxSupplierComponentsSchemasPutInfoVO[];
/**
 * @description 投放报告文件地址
 **/
putProve: string;
/**
 * @description 投放时间
 **/
putTime: string;
/**
 * @description 投放方式 ELEVATOR 一梯一刊；BUILDING 一栋一刊
 **/
putType: string;
/**
 * @description 退款金额
 **/
refundAmount: string;
/**
 * @description 退款方式
 **/
refundMode: string;
/**
 * @description 退款流水号
 **/
refundNo: string;
/**
 * @description 退款时间
 **/
refundTime: string;
/**
 * @description 结算金额
 **/
settleAmount: string;
/**
 * @description 买家昵称
 **/
userNickName: string;
/**
 * @description 买家手机号
 **/
userTel: string;
};
/**
 * @title OrderPageDTO
 **/
export type ZmsxSupplierComponentsSchemasOrderPageDTO = {
/**
 * @description 订单号
 **/
adOrderNo?: string;
/**
 * @description 订单状态 WAIT_PAY 待支付；WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
adOrderStatus?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 投放社区
 **/
communityName?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 查询内容
 **/
queryMsg?: string;
/**
 * @description 查询类型 NICK_NAME 支付宝昵称；ALI_TEL 支付宝手机号（下单人手机号）；CONTACT_TEL 联系人手机号； CONTACT_PERSON 联系人
 **/
queryType: string;
};
/**
 * @title OrderPageVO
 **/
export type ZmsxSupplierComponentsSchemasOrderPageVO = {
/**
 * @description 订单金额
 **/
adOrderAmount: string;
/**
 * @description 广告单编号
 **/
adOrderNo: string;
/**
 * @description 订单状态 WAIT_PAY 待支付；WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
adOrderStatus: string;
/**
 * @description 投放社区
 **/
communityNames: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 下单时间
 **/
createTime: string;
/**
 * @description 广告投放订单ID
 * @format int64
 **/
orderId: number;
/**
 * @description 实付金额
 **/
payAmount: string;
/**
 * @description 支付类型，ALIPAY:  支付宝，WECHAT: 微信支付
 **/
payType: string;
/**
 * @description 投放周期
 * @format int32
 **/
period: number;
/**
 * @description 投放方式 ELEVATOR 一梯一刊；BUILDING 一栋一刊
 **/
putType: string;
/**
 * @description 退款金额
 **/
refundAmount: string;
/**
 * @description 买家昵称
 **/
userNickName: string;
/**
 * @description 买家手机号
 **/
userTel: string;
};
/**
 * @title OrderReportVO
 **/
export type ZmsxSupplierComponentsSchemasOrderReportVO = {
/**
 * @description 投放报告文件地址
 **/
putProve: string;
/**
 * @description 投放报告明细
 **/
putReports: ZmsxSupplierComponentsSchemasPutReportVO[];
/**
 * @description 投放刊位总数
 * @format int32
 **/
totalPrintNum: number;
};
/**
 * @title ProvePhotosVO
 **/
export type ZmsxSupplierComponentsSchemasProvePhotosVO = {
/**
 * @description 实际刊位
 * @format int32
 **/
actualPrintNum: number;
/**
 * @description 社区地址
 **/
address: string;
/**
 * @description 社区图集
 **/
cover: string;
/**
 * @description 楼层信息
 **/
floorInfo: string;
/**
 * @description 社区名称
 **/
name: string;
/**
 * @description 居住率
 **/
occupancyRate: string;
/**
 * @description 规定刊位
 * @format int32
 **/
predictPrintNum: number;
/**
 * @description 投放证明
 **/
putPhoto: string[];
};
/**
 * @title PublishAuditDTO
 **/
export type ZmsxSupplierComponentsSchemasPublishAuditDTO = {
/**
 * @description 审核状态 PROCESSED 待处理, PASSED 已通过, REJECT 已驳回)
 **/
checkState?: string;
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 派单号
 **/
dispatchOrderNo?: string;
/**
 * @description 订单号
 **/
orderNo?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 广告商
 **/
supplierName?: string;
};
/**
 * @title PublishAuditPageVo
 **/
export type ZmsxSupplierComponentsSchemasPublishAuditPageVo = {
/**
 * @description 创建人
 **/
createdBy: string;
/**
 * @description 创建时间
 **/
createdTime: string;
/**
 * @description 派单编号
 **/
dispatchOrderNo: string;
/**
 * @description 处理人
 **/
disposeBy: string;
/**
 * @description 处理时间
 **/
disposeDate: string;
/**
 * @description 主键id
 * @format int64
 **/
id: number;
/**
 * @description 订单编号
 **/
orderNo: string;
/**
 * @description 驳回说明
 **/
rejectInfo: string;
/**
 * @description 状态
 **/
state: string;
/**
 * @description 广告商id
 * @format int64
 **/
supplierId: number;
/**
 * @description 供应商名称
 **/
supplierName: string;
};
/**
 * @title PurposeOrderQueryDTO
 **/
export type ZmsxSupplierComponentsSchemasPurposeOrderQueryDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 纬度
 * @format double
 **/
latitude?: number;
/**
 * @description 经度
 * @format double
 **/
longitude?: number;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title PurposeOrderVO
 **/
export type ZmsxSupplierComponentsSchemasPurposeOrderVO = {
/**
 * @description 所在区
 **/
area: string;
/**
 * @description 楼栋数
 * @format int32
 **/
buildingNumber: number;
/**
 * @description 社区ID
 * @format int64
 **/
communityId: number;
/**
 * @description 社区名称
 **/
communityName: string;
/**
 * @description 社区分类
 **/
communityType: string;
/**
 * @description 社区图集-字符串
 **/
covers: string;
/**
 * @description 距离（KM）
 * @format double
 **/
distance: number;
/**
 * @description 电梯数
 * @format int32
 **/
elevatorNumber: number;
/**
 * @description latitude
 * @format double
 **/
latitude: number;
/**
 * @description 社区图集-数组
 **/
listCovers: string[];
/**
 * @description longitude
 * @format double
 **/
longitude: number;
/**
 * @description 意向单ID
 * @format int64
 **/
purposeId: number;
};
/**
 * @title PutInfoDTO
 **/
export type ZmsxSupplierComponentsSchemasPutInfoDTO = {
/**
 * @description 投放照片合集
 **/
photos: string[];
/**
 * @description 投放信息ID
 * @format int64
 **/
putInfoId: number;
};
/**
 * @title PutInfoPhotoVO
 **/
export type ZmsxSupplierComponentsSchemasPutInfoPhotoVO = {
/**
 * @description 投放照片合集
 **/
photos: string[];
/**
 * @description 投放信息ID
 * @format int64
 **/
putInfoId: number;
};
/**
 * @title PutInfoVO
 **/
export type ZmsxSupplierComponentsSchemasPutInfoVO = {
/**
 * @description 社区名称
 **/
communityName: string;
/**
 * @description 投放刊位
 * @format int32
 **/
printNum: number;
/**
 * @description 投放周期（周）
 * @format int32
 **/
putPeriod: number;
/**
 * @description 投放单价
 **/
putPrice: string;
/**
 * @description 投放总价（社区维度）
 **/
totalAmount: string;
};
/**
 * @title PutInfoVO0
 **/
export type ZmsxSupplierComponentsSchemasPutInfoVO0 = {
/**
 * @description 社区名称
 **/
communityName: string;
/**
 * @description 投放刊位
 * @format int32
 **/
printNum: number;
/**
 * @description 投放信息ID
 * @format int64
 **/
putInfoId: number;
/**
 * @description 投放周期（周）
 * @format int32
 **/
putPeriod: number;
/**
 * @description 投放单价
 **/
putPrice: string;
/**
 * @description 投放总价（社区维度）
 **/
totalAmount: string;
};
/**
 * @title PutPhotosVO
 **/
export type ZmsxSupplierComponentsSchemasPutPhotosVO = {
/**
 * @description 社区名称
 **/
communityName: string;
/**
 * @description 投放照片计数
 * @format int32
 **/
photoCount: number;
/**
 * @description 投放照片列表
 **/
photos: string[];
};
/**
 * @title PutReportVO
 **/
export type ZmsxSupplierComponentsSchemasPutReportVO = {
/**
 * @description 实际刊位
 * @format int32
 **/
actualPrintNum: number;
/**
 * @description 社区名称
 **/
communityName: string;
/**
 * @description 下刊时间
 **/
overTime: string;
/**
 * @description 上刊时间
 **/
putTime: string;
};
/**
 * @title SettleOrderQueryDTO
 **/
export type ZmsxSupplierComponentsSchemasSettleOrderQueryDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 派单号
 **/
dispatchOrderNo?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
};
/**
 * @title SettleOrderVO
 **/
export type ZmsxSupplierComponentsSchemasSettleOrderVO = {
/**
 * @description 派单金额
 **/
amount: string;
/**
 * @description 结算日期
 **/
createTime: string;
/**
 * @description 派单编号
 **/
dispatchOrderNo: string;
/**
 * @description 失败原因
 **/
failMsg: string;
/**
 * @description 实付金额
 **/
paymentAmount: string;
/**
 * @description 退款金额
 **/
refundAmount: string;
/**
 * @description 平台服务费(10%)
 **/
serviceFee: string;
/**
 * @description 结算账号
 **/
settleAccount: string;
/**
 * @description 结算金额
 **/
settleAmount: string;
/**
 * @description 结算流水号
 **/
settleNo: string;
/**
 * @description 结算状态 转账状态 SUCCESS 转账成功；FAIL 转账失败
 **/
settleStatus: string;
};
/**
 * @title SuppOrderDetailVO
 **/
export type ZmsxSupplierComponentsSchemasSuppOrderDetailVO = {
/**
 * @description 实际投放总金额
 **/
actualAmount: string;
/**
 * @description 实际投放信息
 **/
actualPutInfos: ZmsxSupplierComponentsSchemasActualPutVO[];
/**
 * @description 实际投放刊位总数
 * @format int32
 **/
actualPutNum: number;
/**
 * @description 派单金额
 **/
amount: string;
/**
 * @description 派单审核状态
 **/
auditState: string;
/**
 * @description 取消时间
 **/
cancelTime: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 派单时间
 **/
createTime: string;
/**
 * @description 派单ID
 * @format int64
 **/
dispatchOrderId: number;
/**
 * @description 派单编号
 **/
dispatchOrderNo: string;
/**
 * @description 派单状态 WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
dispatchStatus: string;
/**
 * @description 广告素材
 **/
material: string;
/**
 * @description 完成时间
 **/
overTime: string;
/**
 * @description 下单支付时间（待投放开始时间）
 **/
payTime: string;
/**
 * @description 投放周期
 * @format int32
 **/
period: number;
/**
 * @description 预计投放信息
 **/
putInfos: ZmsxSupplierComponentsSchemasPutInfoVO0[];
/**
 * @description 投放时间
 **/
putTime: string;
/**
 * @description 投放方式 ELEVATOR 一梯一刊；BUILDING 一栋一刊
 **/
putType: string;
/**
 * @description 驳回原因
 **/
rejectInfo: string;
/**
 * @description 买家昵称
 **/
userNickName: string;
/**
 * @description 买家手机号
 **/
userTel: string;
};
/**
 * @title SuppOrderPageDTO
 **/
export type ZmsxSupplierComponentsSchemasSuppOrderPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 投放社区
 **/
communityName?: string;
/**
 * @description 订单号
 **/
dispatchOrderNo?: string;
/**
 * @description 订单状态 WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
dispatchStatus?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 查询内容
 **/
queryMsg?: string;
/**
 * @description 查询类型 NICK_NAME 支付宝昵称；ALI_TEL 支付宝手机号（下单人手机号）；CONTACT_TEL 联系人手机号； CONTACT_PERSON 联系人
 **/
queryType: string;
};
/**
 * @title SuppOrderPageVO
 **/
export type ZmsxSupplierComponentsSchemasSuppOrderPageVO = {
/**
 * @description 派单金额
 **/
amount: string;
/**
 * @description 投放社区
 **/
communityNames: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 派单时间
 **/
createTime: string;
/**
 * @description 派单ID
 * @format int64
 **/
dispatchOrderId: number;
/**
 * @description 派单编号
 **/
dispatchOrderNo: string;
/**
 * @description 派单状态 WAIT_PUT 待投放；PUT_IN 已投放；SUCCESS 已完成；CANCEL 已取消
 **/
dispatchStatus: string;
/**
 * @description 实付金额
 **/
payAmount: string;
/**
 * @description 投放周期
 * @format int32
 **/
period: number;
/**
 * @description 投放方式 ELEVATOR 一梯一刊；BUILDING 一栋一刊
 **/
putType: string;
/**
 * @description 退款金额
 **/
refundAmount: string;
/**
 * @description 买家昵称
 **/
userNickName: string;
/**
 * @description 买家手机号
 **/
userTel: string;
};
/**
 * @title SuppPutPhotosVO
 **/
export type ZmsxSupplierComponentsSchemasSuppPutPhotosVO = {
/**
 * @description 上传数据集
 **/
putInfoPhotos: ZmsxSupplierComponentsSchemasPutInfoPhotoVO[];
};
/**
 * @title SupplierDTO
 **/
export type ZmsxSupplierComponentsSchemasSupplierDTO = {
/**
 * @description 支付宝帐号
 **/
aliAccount: string;
/**
 * @description 支付宝姓名
 **/
aliAccountName: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 供应商id，编辑时必传
 * @format int64
 **/
id: number;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 初始登录密码
 **/
initialPassword: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 广告供应商名称
 **/
name: string;
/**
 * @description 营业执照编号
 **/
supplierLicenseNo: string;
/**
 * @description 营业执照
 **/
supplierLicensePic: string;
/**
 * @description 广告商类型 1:企业 2:个人
 * @format int32
 **/
supplierType: number;
};
/**
 * @title SupplierDetailInfoVO
 **/
export type ZmsxSupplierComponentsSchemasSupplierDetailInfoVO = {
/**
 * @description 登录帐号id
 * @format int64
 **/
accountId: number;
/**
 * @description 支付宝账号
 **/
aliAccount: string;
/**
 * @description 支付宝姓名
 **/
aliAccountName: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 创建人名称
 **/
createdBy: string;
/**
 * @description 是否删除
 **/
deleted: boolean;
/**
 * @description 是否启用
 **/
enable: boolean;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 广告供应商名称
 **/
name: string;
/**
 * @description 是否重置密码
 **/
resetPassword: boolean;
/**
 * @description 广告商id
 * @format int64
 **/
supplierId: number;
/**
 * @description 营业执照编号
 **/
supplierLicenseNo: string;
/**
 * @description 营业执照
 **/
supplierLicensePic: string;
/**
 * @description 广告商类型
 * @format int32
 **/
supplierType: number;
/**
 * @description 修改时间
 **/
updateTime: string;
/**
 * @description 修改人名称
 **/
updatedBy: string;
};
/**
 * @title SupplierDetailVo
 **/
export type ZmsxSupplierComponentsSchemasSupplierDetailVo = {
/**
 * @description 登录帐号
 * @format int64
 **/
accountId: number;
/**
 * @description 登录帐号
 **/
accountName: string;
aliAccount: string;
aliAccountName: string;
contactPerson: string;
contactPhone: string;
/**
 * @example yyyy-MM-dd HH:mm:ss
 **/
createTime: string;
createdBy: string;
deleted: boolean;
enable: boolean;
/**
 * @format int64
 **/
id: number;
idcardBackPic: string;
idcardFacePic: string;
/**
 * @description 初始登录密码
 **/
initialPassword: string;
legalName: string;
legalNumber: string;
name: string;
resetPassword: boolean;
supplierLicenseNo: string;
supplierLicensePic: string;
/**
 * @description 供应商编号
 **/
supplierNo: string;
/**
 * @format int32
 **/
supplierType: number;
/**
 * @description 修改时间
 **/
updateTime: string;
/**
 * @description 修改人名称
 **/
updatedBy: string;
};
/**
 * @title SupplierPageDTO
 **/
export type ZmsxSupplierComponentsSchemasSupplierPageDTO = {
/**
 * @description 排序字段数组，用逗号分割
 **/
columns?: string[];
/**
 * @description 是否已启用
 **/
enable?: boolean;
/**
 * @description 广告供应商名称
 **/
name?: string;
/**
 * @description 排序字段方式，用逗号分割，ASC正序，DESC倒序
 **/
orders?: string[];
/**
 * @description 当前页
 * @format int32
 **/
pageNum: number;
/**
 * @description 每页大小
 * @format int32
 **/
pageSize: number;
/**
 * @description 查询内容
 **/
queryMsg?: string;
/**
 * @description 查询类型 CONTACT_PERSON 联系人姓名; CONTACT_PHONE 联系人电话
 **/
queryType?: string;
};
/**
 * @title SupplierPageVO
 **/
export type ZmsxSupplierComponentsSchemasSupplierPageVO = {
/**
 * @description 帐号id
 * @format int64
 **/
accountId: number;
/**
 * @description 支付宝帐号
 **/
aliAccount: string;
/**
 * @description 支付宝姓名
 **/
aliAccountName: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 创建时间
 **/
createTime: string;
/**
 * @description 创建人
 **/
createdBy: string;
/**
 * @description 是否已经启用
 **/
enable: boolean;
/**
 * @description 供应商id，编辑时必传
 * @format int64
 **/
id: number;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 初始登录密码
 **/
initialPassword: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 广告供应商名称
 **/
name: string;
/**
 * @description 营业执照编号
 **/
supplierLicenseNo: string;
/**
 * @description 营业执照
 **/
supplierLicensePic: string;
/**
 * @description 供应商编号
 **/
supplierNo: string;
/**
 * @description 广告商类型
 * @format int32
 **/
supplierType: number;
/**
 * @description 更新时间
 **/
updateTime: string;
/**
 * @description 更新人
 **/
updatedBy: string;
};
/**
 * @title UpdateSupplierInfoDTO
 **/
export type ZmsxSupplierComponentsSchemasUpdateSupplierInfoDTO = {
/**
 * @description 支付宝帐号
 **/
aliAccount: string;
/**
 * @description 支付宝姓名
 **/
aliAccountName: string;
/**
 * @description 联系人
 **/
contactPerson: string;
/**
 * @description 联系人电话
 **/
contactPhone: string;
/**
 * @description 供应商id，编辑时必传
 * @format int64
 **/
id: number;
/**
 * @description 法人证件照国徽面
 **/
idcardBackPic: string;
/**
 * @description 法人证件照人像面
 **/
idcardFacePic: string;
/**
 * @description 初始登录密码
 **/
initialPassword: string;
/**
 * @description 法人名称
 **/
legalName: string;
/**
 * @description 法人身份证号
 **/
legalNumber: string;
/**
 * @description 广告供应商名称
 **/
name: string;
/**
 * @description 营业执照编号
 **/
supplierLicenseNo: string;
/**
 * @description 营业执照
 **/
supplierLicensePic: string;
/**
 * @description 广告商类型
 * @format int32
 **/
supplierType: number;
};
/**
 * @title UpdateSupplierPasswordDTO
 **/
export type ZmsxSupplierComponentsSchemasUpdateSupplierPasswordDTO = {
/**
 * @description 新密码
 **/
newPassword: string;
/**
 * @description 确认新密码
 **/
newPasswordConfirm: string;
/**
 * @description 原密码
 **/
oldPassword?: string;
};
/**
 * @title UpdateSupplierStateDTO
 **/
export type ZmsxSupplierComponentsSchemasUpdateSupplierStateDTO = {
/**
 * @description 商户帐号
 * @format int64
 **/
accountId: number;
/**
 * @description 是否停启用
 **/
enable: boolean;
/**
 * @description 广告商主键id
 * @format int64
 **/
id: number;
};
/**
 * @title UploadMaterialDTO
 **/
export type ZmsxSupplierComponentsSchemasUploadMaterialDTO = {
/**
 * @description 素材图片地址
 **/
material: string;
/**
 * @description 订单ID
 * @format int64
 **/
orderId: number;
};
/**
 * @title UploadProveDTO
 **/
export type ZmsxSupplierComponentsSchemasUploadProveDTO = {
/**
 * @description 订单号
 **/
orderNo: string;
/**
 * @description 投放证明文件地址
 **/
putProve: string;
};
/**
 * @title UploadPutPhotosDTO
 **/
export type ZmsxSupplierComponentsSchemasUploadPutPhotosDTO = {
/**
 * @description 派单编码
 **/
dispatchOrderNo: string;
/**
 * @description 上传数据集
 **/
putInfos: ZmsxSupplierComponentsSchemasPutInfoDTO[];
};
/**
 * @title WaitSettleOrderVO
 **/
export type ZmsxSupplierComponentsSchemasWaitSettleOrderVO = {
/**
 * @description 派单金额
 **/
amount: string;
/**
 * @description 派单编号
 **/
dispatchOrderNo: string;
/**
 * @description 预计结算金额(包含平台服务费)
 **/
settleAmount: string;
};
/**
 * @title PageVO«AdOrderPageVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_AdOrderPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasAdOrderPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«AppCommunityVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_AppCommunityVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasAppCommunityVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«CommunityVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_CommunityVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasCommunityVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«OrderPageVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_OrderPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasOrderPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PublishAuditPageVo»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_PublishAuditPageVo_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasPublishAuditPageVo[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«PurposeOrderVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_PurposeOrderVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasPurposeOrderVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«SettleOrderVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_SettleOrderVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasSettleOrderVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«SuppOrderPageVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_SuppOrderPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasSuppOrderPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«SupplierPageVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_SupplierPageVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasSupplierPageVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title PageVO«WaitSettleOrderVO»
 **/
export type ZmsxSupplierComponentsSchemasPageVO_WaitSettleOrderVO_ = {
/**
 * @format int64
 **/
current: number;
records: ZmsxSupplierComponentsSchemasWaitSettleOrderVO[];
/**
 * @format int64
 **/
size: number;
/**
 * @format int64
 **/
total: number;
};
/**
 * @title Result«AdOrderDetailVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_AdOrderDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasAdOrderDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«AppCommunityDetailVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_AppCommunityDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasAppCommunityDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«CommunityVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_CommunityVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasCommunityVO;
msg: string;
success: boolean;
};
/**
 * @title Result«ExcelCommunitiesVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_ExcelCommunitiesVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasExcelCommunitiesVO;
msg: string;
success: boolean;
};
/**
 * @title Result«List«AppCommunityVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_List_AppCommunityVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasAppCommunityVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«List«ProvePhotosVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_List_ProvePhotosVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasProvePhotosVO[];
msg: string;
success: boolean;
};
/**
 * @title Result«OrderDetailVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_OrderDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasOrderDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«OrderReportVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_OrderReportVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasOrderReportVO;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AdOrderPageVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_AdOrderPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_AdOrderPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«AppCommunityVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_AppCommunityVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_AppCommunityVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«CommunityVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_CommunityVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_CommunityVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«OrderPageVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_OrderPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_OrderPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«PublishAuditPageVo»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_PublishAuditPageVo_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_PublishAuditPageVo_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«PurposeOrderVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_PurposeOrderVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_PurposeOrderVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«SettleOrderVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_SettleOrderVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_SettleOrderVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«SuppOrderPageVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_SuppOrderPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_SuppOrderPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«SupplierPageVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_SupplierPageVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_SupplierPageVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PageVO«WaitSettleOrderVO»»
 **/
export type ZmsxSupplierComponentsSchemasResult_PageVO_WaitSettleOrderVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPageVO_WaitSettleOrderVO_;
msg: string;
success: boolean;
};
/**
 * @title Result«PutPhotosVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_PutPhotosVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasPutPhotosVO;
msg: string;
success: boolean;
};
/**
 * @title Result«SuppOrderDetailVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_SuppOrderDetailVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasSuppOrderDetailVO;
msg: string;
success: boolean;
};
/**
 * @title Result«SuppPutPhotosVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_SuppPutPhotosVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasSuppPutPhotosVO;
msg: string;
success: boolean;
};
/**
 * @title Result«SupplierDetailInfoVO»
 **/
export type ZmsxSupplierComponentsSchemasResult_SupplierDetailInfoVO_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasSupplierDetailInfoVO;
msg: string;
success: boolean;
};
/**
 * @title Result«SupplierDetailVo»
 **/
export type ZmsxSupplierComponentsSchemasResult_SupplierDetailVo_ = {
/**
 * @format int32
 **/
code: number;
data: ZmsxSupplierComponentsSchemasSupplierDetailVo;
msg: string;
success: boolean;
};
/**
 * @title Result«Void»
 **/
export type ZmsxSupplierComponentsSchemasResult_Void_ = {
/**
 * @format int32
 **/
code: number;
msg: string;
success: boolean;
};
/**
 * @title Result«string»
 **/
export type ZmsxSupplierComponentsSchemasResult_string_ = {
/**
 * @format int32
 **/
code: number;
data: string;
msg: string;
success: boolean;
};
export interface PathsZmsxSupplier{'/supplier/c/app/adOrder/cancel': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/c/app/adOrder/detail': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_AdOrderDetailVO_;
};
};
'/supplier/c/app/adOrder/orderPaying': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/c/app/adOrder/orderReport': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_OrderReportVO_;
};
};
'/supplier/c/app/adOrder/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxSupplierComponentsSchemasAdOrderPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_AdOrderPageVO_;
};
};
'/supplier/c/app/adOrder/payOrder': {get: {
param:{query: {
/**
 * @description orderId
 * @format int64
 **/
orderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_string_;
};
};
'/supplier/c/app/adOrder/putOrder': {put: {
param:{
/**
 * @description orderDTO
 **/
body: ZmsxSupplierComponentsSchemasAdOrderDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_AdOrderDetailVO_;
};
};
'/supplier/c/app/adOrder/uploadMaterial': {put: {
param:{
/**
 * @description materialDTO
 **/
body: ZmsxSupplierComponentsSchemasUploadMaterialDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/c/app/community/detail': {post: {
param:{
/**
 * @description appCommunityDetailQueryDTO
 **/
body: ZmsxSupplierComponentsSchemasAppCommunityDetailQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_AppCommunityDetailVO_;
};
};
'/supplier/c/app/community/list': {post: {
param:{
/**
 * @description appCommunityListDTO
 **/
body: ZmsxSupplierComponentsSchemasAppCommunityListDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_List_AppCommunityVO_;
};
};
'/supplier/c/app/community/page': {post: {
param:{
/**
 * @description queryDTO
 **/
body: ZmsxSupplierComponentsSchemasAppCommunityQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_AppCommunityVO_;
};
};
'/supplier/c/app/purposeOrder': {delete: {
param:{query: {
/**
 * @description purposeId
 * @format int64
 **/
purposeId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/c/app/purposeOrder/add': {get: {
param:{query: {
/**
 * @description communityId
 * @format int64
 **/
communityId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/c/app/purposeOrder/list/community': {post: {
param:{
/**
 * @description purposeIds
 **/
body: number[];
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_List_AppCommunityVO_;
};
};
'/supplier/c/app/purposeOrder/page': {post: {
param:{
/**
 * @description queryDTO
 **/
body: ZmsxSupplierComponentsSchemasPurposeOrderQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_PurposeOrderVO_;
};
};
'/supplier/console/order/confirmPut': {get: {
param:{query: {
/**
 * @description adOrderId
 * @format int64
 **/
adOrderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/console/order/detail': {get: {
param:{query: {
/**
 * @description orderNo
 **/
orderNo: string;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_OrderDetailVO_;
};
};
'/supplier/console/order/dispatchOrderDetail': {get: {
param:{query: {
/**
 * @description dispatchOrderNo
 **/
dispatchOrderNo: string;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_SuppOrderDetailVO_;
};
};
'/supplier/console/order/examinePhotos': {get: {
param:{query: {
/**
 * @description putInfoId
 * @format int64
 **/
putInfoId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PutPhotosVO_;
};
};
'/supplier/console/order/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxSupplierComponentsSchemasOrderPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_OrderPageVO_;
};
};
'/supplier/console/order/proveDetail': {get: {
param:{query: {
/**
 * @description orderNo
 **/
orderNo: string;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_List_ProvePhotosVO_;
};
};
'/supplier/console/order/uploadProve': {put: {
param:{
/**
 * @description proveDTO
 **/
body: ZmsxSupplierComponentsSchemasUploadProveDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/console/publishAudit/page': {post: {
param:{
/**
 * @description publishAuditDTO
 **/
body: ZmsxSupplierComponentsSchemasPublishAuditDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_PublishAuditPageVo_;
};
};
'/supplier/console/publishAudit/update': {put: {
param:{
/**
 * @description checkAuditDTO
 **/
body: ZmsxSupplierComponentsSchemasCheckAuditDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/console/supplier/page': {post: {
param:{
/**
 * @description supplierPageDTO
 **/
body: ZmsxSupplierComponentsSchemasSupplierPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_SupplierPageVO_;
};
};
'/supplier/console/supplier/save': {post: {
param:{
/**
 * @description supplierDTO
 **/
body: ZmsxSupplierComponentsSchemasSupplierDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/console/supplier/selectById': {get: {
param:{query: {
/**
 * @description id
 * @format int64
 **/
id: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_SupplierDetailVo_;
};
};
'/supplier/console/supplier/update': {put: {
param:{
/**
 * @description updateSupplierInfoDTO
 **/
body: ZmsxSupplierComponentsSchemasUpdateSupplierInfoDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/console/supplier/updateSupplierState': {put: {
param:{
/**
 * @description updateSupplierStateDTO
 **/
body: ZmsxSupplierComponentsSchemasUpdateSupplierStateDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/supplier/community/deleted': {post: {
param:{
/**
 * @description baseEntityIdDTO
 **/
body: ZmsxSupplierComponentsSchemasBaseEntityIdDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/supplier/community/detail': {post: {
param:{
/**
 * @description baseEntityIdDTO
 **/
body: ZmsxSupplierComponentsSchemasBaseEntityIdDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_CommunityVO_;
};
};
'/supplier/supplier/community/excel': {post: {
param:{
/**
 * @description file
 **/
body: string;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_ExcelCommunitiesVO_;
};
};
'/supplier/supplier/community/page': {post: {
param:{
/**
 * @description queryDTO
 **/
body: ZmsxSupplierComponentsSchemasCommunityQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_CommunityVO_;
};
};
'/supplier/supplier/community/save': {post: {
param:{
/**
 * @description communityDTO
 **/
body: ZmsxSupplierComponentsSchemasCommunityDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/supplier/community/update': {post: {
param:{
/**
 * @description communityDTO
 **/
body: ZmsxSupplierComponentsSchemasCommunityDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/supplier/dispatchOrder/cancel': {get: {
param:{query: {
/**
 * @description dispatchOrderId
 * @format int64
 **/
dispatchOrderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/supplier/dispatchOrder/changePutInfo': {put: {
param:{
/**
 * @description putInfoDTO
 **/
body: ZmsxSupplierComponentsSchemasChangePutInfoDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/supplier/dispatchOrder/detail': {get: {
param:{query: {
/**
 * @description dispatchOrderNo
 **/
dispatchOrderNo: string;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_SuppOrderDetailVO_;
};
};
'/supplier/supplier/dispatchOrder/page': {post: {
param:{
/**
 * @description pageDTO
 **/
body: ZmsxSupplierComponentsSchemasSuppOrderPageDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_SuppOrderPageVO_;
};
};
'/supplier/supplier/dispatchOrder/pushAudit': {get: {
param:{query: {
/**
 * @description dispatchOrderId
 * @format int64
 **/
dispatchOrderId: number;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/supplier/dispatchOrder/putPhotos': {get: {
param:{query: {
/**
 * @description dispatchOrderNo
 **/
dispatchOrderNo: string;
};
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_SuppPutPhotosVO_;
};
};
'/supplier/supplier/dispatchOrder/uploadPutPhotos': {put: {
param:{
/**
 * @description putInfoDTO
 **/
body: ZmsxSupplierComponentsSchemasUploadPutPhotosDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
'/supplier/supplier/settleOrder/page/settle': {post: {
param:{
/**
 * @description settleOrderQueryDTO
 **/
body: ZmsxSupplierComponentsSchemasSettleOrderQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_SettleOrderVO_;
};
};
'/supplier/supplier/settleOrder/page/wait': {post: {
param:{
/**
 * @description settleOrderQueryDTO
 **/
body: ZmsxSupplierComponentsSchemasSettleOrderQueryDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_PageVO_WaitSettleOrderVO_;
};
};
'/supplier/supplier/supplierInfo': {get: {
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_SupplierDetailInfoVO_;
};
};
'/supplier/supplier/supplierInfo/updatePassword': {post: {
param:{
/**
 * @description updateSupplierPasswordDTO
 **/
body: ZmsxSupplierComponentsSchemasUpdateSupplierPasswordDTO;
}
/**
 * @description OK
 **/
response: ZmsxSupplierComponentsSchemasResult_Void_;
};
};
}
