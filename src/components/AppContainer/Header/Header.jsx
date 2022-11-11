import React from 'react';
import s from './Header.module.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Header = (props) => {
    const onFormSubmit = (data) => {
        props.setUser(data.name.trim());
        reset();
    }
    const {register, handleSubmit, reset, formState: {errors}, clearErrors} = useForm();
    return (
        <div className={s.header}>
            <div className={s.header__logo}>
            <i className="fa fa-github" aria-hidden="true"></i>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} className={s.search__form}>
                <button className={s.search__logo}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
                <input {...register('name', {required: 'field is reqired'})} onInput={() => {clearErrors()}} 
                className={s.search__input} 
                type="text" name="name"/>
            </form>
        </div>
    );

}

export default Header;