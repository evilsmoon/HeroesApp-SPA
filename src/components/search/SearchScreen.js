import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search)

    const [formValeus, handelInputChange] = useForm({
        hero: q
    })
    const { hero } = formValeus;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log(hero)
        history.push(`?q=${hero}`)

    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form
                        onSubmit={handelSubmit}
                    >
                        <input
                            type='text'
                            name='hero'
                            placeholder='Find your hero'
                            className='form-control'
                            autoComplete='off'
                            value={hero}
                            onChange={handelInputChange}
                        />
                        <button
                            type='submit'
                            className='btn m-1  btn-block btn-success'
                        >
                            Search...
                    </button>
                    </form>
                </div>
                <div className='col-7'>

                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className='alert alert-danger'>
                            Search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className='alert alert-info'>
                            There is no a hero with { q }
                         </div>

                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
