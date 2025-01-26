import { Circle, circleArr, Item } from './Circle'
import { getDistance } from './tools'
import _ from 'lodash'
import { Router } from 'vitepress'

let highlightedCircle: Circle<Item> | null

type EventFnWrapCall = (
  event: MouseEvent,
  canvas: HTMLCanvasElement,
  router?: Router
) => any
function eventFnWrap(
  canvas: HTMLCanvasElement,
  call: EventFnWrapCall,
  router?: Router
) {
  return function (event: Event) {
    call(event as MouseEvent, canvas, router)
  }
}
function handleCanvasMouseMove(
  event: MouseEvent,
  canvas: HTMLCanvasElement
) {
  for (const circle of circleArr) {
    const distance = getDistance(canvas, event, circle)
    if (distance <= circle.currentRadius) {
      if (highlightedCircle !== circle) {
        highlightedCircle?.setHighlighted(false)
        highlightedCircle = circle
        highlightedCircle.setHighlighted(true)
        canvas.style.cursor = 'pointer'
      }
      return
    }
  }
  if (highlightedCircle) {
    highlightedCircle.setHighlighted(false)
    highlightedCircle = null
    canvas.style.cursor = 'default'
  }
}

function handleCanvasMouseLeave(
  _event: MouseEvent,
  canvas: HTMLCanvasElement
) {
  if (highlightedCircle && canvas) {
    highlightedCircle.setHighlighted(false)
    highlightedCircle = null
    canvas.style.cursor = 'default'
  }
}

export function handleCanvasClick(
  event: MouseEvent,
  canvas: HTMLCanvasElement,
  router?: Router
) {
  for (const circle of circleArr) {
    const distance = getDistance(canvas, event, circle)
    if (distance <= circle.currentRadius) {
      if (circle.textContext.link && router) {
        console.log(circle.textContext, 'circle.textContext')
        console.log(router, 'circle.textContext')
        router.go(circle.textContext.link)
      }
      return
    }
  }
}

const eventMap: Record<string, EventFnWrapCall> = {
  mousemove: handleCanvasMouseMove,
  mouseleave: handleCanvasMouseLeave,
  click: handleCanvasClick
}

export function listener(canvas: HTMLCanvasElement, router?: Router) {
  const listened: Record<string, ReturnType<typeof eventFnWrap>> = {}
  _.forOwn(eventMap, (callback, evtName) => {
    listened[evtName] = eventFnWrap(canvas, callback, router)
    canvas.addEventListener(evtName, listened[evtName])
  })
  function clearup() {
    _.forOwn(listened, (fn, evtName) =>
      canvas.removeEventListener(evtName, fn)
    )
  }
  return clearup
}
