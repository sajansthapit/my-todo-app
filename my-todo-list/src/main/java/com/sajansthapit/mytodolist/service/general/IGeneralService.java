package com.sajansthapit.mytodolist.service.general;import com.sajansthapit.mytodolist.dto.BaseResponse;import com.sajansthapit.mytodolist.dto.GeneralDto;public interface IGeneralService {    /**     * Method to save entities that has only field name     *     * @param generalDto: GeneralDto (name, isActive)     * @return BaseDto (message)     */    BaseResponse save(GeneralDto generalDto);}