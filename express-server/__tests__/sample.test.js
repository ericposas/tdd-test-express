import request from 'supertest'
import '@babel/polyfill'
import Thing from '../models/Thing'
import server from '../server'

let id

afterAll(done => {
	console.log('all tests done')
	Thing.collection.drop()
	done()
})

afterEach(() => server.close())

beforeAll(() => jest.setTimeout(10000))

describe('Get home path', () => {
	it('should get the home page', async () => {
		const res = await request(server)
			.get('/')
		expect(res.statusCode).toEqual(200)
	})
})

describe('Create new thing, Get created Thing _id, Test Update and Delete routes', () => {
	it('should create a new thing in the database', async () => {
		const res = await request(server)
			.post('/things')
			.send({
				name: 'Test thing'
			})
		id = res.body.success._id
		expect(res.statusCode).toEqual(201)
		expect(res.body).toHaveProperty('success')
	})
	it('should fail to create a new thing in db', async () => {
		const res = await request(server)
			.post('/things')
			.send({})
		expect(res.statusCode).toEqual(404)
		expect(res.body).toHaveProperty('error')
	})
	it('should fail to update thing', async () => {
		const res = await request(server)
			.put('/things/'+id)
			.send({})
		expect(res.statusCode).toEqual(404)
		expect(res.body).toHaveProperty('error')
	})
	it('should retrieve specific Thing by _id', async () => {
		const res = await request(server)
			.put('/things/'+id)
			.send({
				name: 'updated thing'
			})
		expect(res.statusCode).toEqual(200)
		expect(res.body).toHaveProperty('success')
	})
	it('should delete specific Thing by _id', async () => {
		const res = await request(server)
			.delete('/things/'+id)
		expect(res.statusCode).toEqual(200)
		expect(res.body).toHaveProperty('success')
	})
})

describe('Should get all Things', () => {
	it('should retrieve all Things from db', async () => {
		const res = await request(server)
			.get('/things')
		expect(res.statusCode).toEqual(200)
		expect(res.body).toHaveProperty('success')
	})
})
