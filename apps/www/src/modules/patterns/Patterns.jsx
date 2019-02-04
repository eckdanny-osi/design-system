import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { Page, JumpNav } from '@cwds/components'
/* eslint-disable import/no-webpack-loader-syntax */
import Patterns from '!babel-loader!@mdx-js/loader!./Patterns.mdx'

const toSlug = str =>
    slugify(str, {
        replacement: '-',
        lower: true,
    })

const routes = [].map(title => ({ title, path: `#${toSlug(title)}` }))

class CoreStylePage extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }
    render() {
        return (
            <Page
                title="Start Here: Focusing on Users"
                layout="dashboard"
                breadcrumb={[
                    { title: 'Home', path: '/' },
                    { title: 'Patterns', path: '/patterns' },
                ]}
                sidenav={() => {
                    return <div>SIDENAV HERE</div>
                    // return <JumpNav tag={Link} routes={routes} />
                }}
                main={() => <Patterns />}
            />
        )
    }
}

export default CoreStylePage
